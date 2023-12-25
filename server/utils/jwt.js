import jwt from "jsonwebtoken";
import crypto from "crypto";

// require("crypto").randomBytes(32).toString("hex")

export const signAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRETE_KEY, {
    expiresIn: process.env.EXPIRED_ACCESS_TOKEN,
  });
  return accessToken;
};

export const signRefreshToken = (payload) => {
  const refreshToken = jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRETE_KEY,
    {
      expiresIn: process.env.EXPIRED_REFRESH_TOKEN,
    }
  );
  return refreshToken;
};

export const signResetPasswordToken = () => {
  let token = crypto.randomBytes(32).toString("hex");
  const resetToken = jwt.sign({ token }, process.env.JWT_KEY, {
    expiresIn: "3m",
  });
  return resetToken;
};
