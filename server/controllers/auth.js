import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import { validateLogin, validateRegister } from "../utils/validation.js";
import createHttpError from "http-errors";
import { comparePassword, hashPassword } from "../utils/password.js";
import jwt from "jsonwebtoken";
import { signAccessToken, signRefreshToken } from "../utils/jwt.js";

// @Register
export const register = asyncHandler(async (req, res) => {
  // validate req.body
  const { error } = validateRegister(req.body);
  if (error) {
    throw new createHttpError.BadRequest(error.details[0].message);
  }

  // Check email exist
  const foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    throw new createHttpError.Conflict("This email have been used.");
  }

  // Hash password
  const hashedPassword = await hashPassword(req.body.password);

  // create new user
  const user = await User.create({ ...req.body, password: hashedPassword });

  return res.status(201).json({ user });
});

// @Login
export const login = asyncHandler(async (req, res) => {
  // Validate input
  const { error } = validateLogin(req.body);
  if (error) {
    throw new createHttpError.BadRequest(error.details[0].message);
  }

  // Verify email and password
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) {
    throw new createHttpError.Unauthorized("Missing email or password.");
  }

  const matchPassword = await comparePassword(
    req.body.password,
    foundUser.password
  );
  if (!matchPassword) {
    throw new createHttpError.Unauthorized("Missing email or password.");
  }

  const newAccessToken = signAccessToken({
    id: foundUser._id,
    role: foundUser.role,
  });

  const newRefreshToken = signRefreshToken({ id: foundUser._id });

  // Detect refresh token reuse
  const cookies = req.cookies;
  if (cookies?.jwt) {
    res.clearCookie("jwt", { httpOnly: true, secure: true, sameSite: "none" });
    const foundToken = await User.findOne({ refreshToken: cookies.jwt });

    // refresh token reuse
    if (!foundToken) {
      foundUser.refreshToken = [];
    }

    // user does not log out
    foundUser.refreshToken = foundUser.refreshToken.filter(
      (token) => token !== cookies.jwt
    );
  }

  foundUser.refreshToken.push(newRefreshToken);
  await foundUser.save();

  res.cookie("jwt", newRefreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.json({ user: foundUser, newAccessToken });
});

// @Logout
export const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    throw new createHttpError.Unauthorized("unauthorized.");
  }

  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = await User.findOne({ refreshToken });
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRETE_KEY,
      async (err, decoded) => {
        if (err) {
          throw new createHttpError.Forbidden();
        }
        const hackedUser = await User.findById(decoded.id);
        if (hackedUser) {
          hackedUser.refreshToken = [];
          await hackedUser.save();
        }
      }
    );
  }

  // delete refresh token in db
  foundUser.refreshToken = foundUser.refreshToken.filter(
    (token) => token !== refreshToken
  );
  await foundUser.save();
  res.clearCookie("jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return res.status(200).json({ msg: "Logged out..." });
});

// @Refresh
export const refresh = asyncHandler(async (req, res) => {
  // check cookies
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    throw new createHttpError.Unauthorized();
  }

  const refreshToken = cookies.jwt;

  // is token in db?
  const foundUser = await User.findOne({ refreshToken });
  if (!foundUser) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRETE_KEY,
      async (err, decoded) => {
        if (err) {
          throw new createHttpError.Forbidden();
        }
        const hackedUser = await User.findById(decoded.id);
        if (hackedUser) {
          hackedUser.refreshToken = [];
          await hackedUser.save();
        }
      }
    );

    throw new createHttpError.Forbidden();
  }

  // evaluate RT
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRETE_KEY,
    async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          throw new createHttpError.Forbidden(err.message);
        }
        throw new createHttpError.Forbidden(err.message);
      }
      const foundUser = await User.findById(decoded.id);

      if (!foundUser) {
        throw new createHttpError.Forbidden();
      }

      // delete old refresh token
      foundUser.refreshToken = foundUser.refreshToken.filter(
        (token) => token !== refreshToken
      );

      const newAccessToken = signAccessToken({
        id: foundUser._id,
        role: foundUser.role,
      });

      const newRefreshToken = signRefreshToken({ id: foundUser._id });

      // save new refresh token in db
      foundUser.refreshToken.push(newRefreshToken);
      await foundUser.save();

      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res
        .status(201)
        .json({ user: foundUser, accessToken: newAccessToken });
    }
  );
});
