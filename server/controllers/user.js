import User from "../models/user.model.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import { signResetPasswordToken } from "../utils/jwt.js";
import createHttpError from "http-errors";
import { validatePassword } from "../utils/validation.js";
import { hashPassword } from "../utils/password.js";

// @Forgot password
export const forgotPassword = asyncHandler(async (req, res) => {
  // Validate email
  if (!req.body.email) {
    throw new createHttpError.Unauthorized("Please input credentials.");
  }

  // Is email exist in db?
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) {
    throw new createHttpError.Unauthorized("Not found with the given email!");
  }

  // Send email to reset password
  const resetToken = signResetPasswordToken();
  foundUser.resetPasswordToken = resetToken;
  await foundUser.save();

  const email = foundUser.email;

  const link = `${process.env.CLIENT_BASE_URL}/reset-password/${resetToken}`;
  await sendEmail(email, link);

  return res.json({ msg: "Please check your email!" });
});

// @Reset password
export const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  if (!token) {
    throw new createHttpError.Unauthorized("Token is invalid.");
  }

  // @Is token in DB
  const foundUser = await User.findOne({
    resetPasswordToken: token,
  });
  if (!foundUser) {
    throw new createHttpError.Unauthorized();
  }

  // @Is token expired?
  jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
    if (err) {
      foundUser.resetPasswordToken = undefined;
      await foundUser.save();
      throw new createHttpError.Forbidden(err.message);
    }
  });

  // @Reset password
  const { error } = validatePassword(req.body);
  if (error) {
    throw new createHttpError.BadRequest(error.details[0].message);
  }
  console.log(token);
  const newPassword = await hashPassword(req.body.password);
  foundUser.password = newPassword;
  foundUser.resetPasswordToken = undefined;
  await foundUser.save();

  return res.json({ msg: "Password is reset." });
});
