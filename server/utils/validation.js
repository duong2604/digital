import Joi from "joi";

//validate input signup data
export const validateRegister = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

//validate input login data
export const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

// validate password
export const validatePassword = (password) => {
  const schema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  return schema.validate(password);
};

// validate input new product
export const validateInputNewProduct = (data) => {
  const schema = Joi.object({
    name: Joi.string().max(150).required(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(data);
};
