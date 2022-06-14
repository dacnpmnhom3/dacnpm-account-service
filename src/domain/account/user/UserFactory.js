import joi from "@hapi/joi";
import { User } from "./UserDomainModel";

export const createValidate = async (data) => {
  const user = joi.object({
    phone: joi.optional(),
    address: joi.string().optional(),
    password: joi.string().required(),
    email: joi.string().email().required(),
    fullName: joi.string().min(2).max(50).required(),
  });

  const newUser = {
    info: {},
    Message: "",
    error: false,
  };
  const validationResult = user.validate(data);

  if (validationResult.error) {
    newUser.error = true;
    newUser.Message = validationResult.error.details[0].message;
  } else {
    newUser.info = new User(
      data.email,
      data.password,
      data.fullName,
      data.phone,
      data.address,
    );
  }
  return newUser;
};

export const loginValidate = async (data) => {
  const user = joi.object({
    password: joi.string().required(),
    email: joi.string().email().required(),
  });

  const newUser = {
    info: {},
    Message: "",
    error: false,
  };

  const validationResult = user.validate(data);

  if (validationResult.error) {
    newUser.error = true;
    newUser.Message = validationResult.error.details[0].message;
  } else {
    newUser.Message = "Validate Success";
  }
  return newUser;
};

export const updateUser = async (data) => {
  const user = joi.object({
    phone: joi.optional(),
    address: joi.string().optional(),
    password: joi.string().optional(),
    email: joi.string().email().optional(),
    fullName: joi.string().min(2).max(50).optional(),
  });

  const validationResult = user.validate(data);

  if (validationResult.error) {
    return {
      error: true,
      message: validationResult.error.details[0].message,
    };
  }

  return {
    error: false,
    message: "",
  };
};
