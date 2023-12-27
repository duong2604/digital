import Joi from "joi";

export const validateRegister = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

export const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

export const validatePassword = (password) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  return schema.validate(password);
};
