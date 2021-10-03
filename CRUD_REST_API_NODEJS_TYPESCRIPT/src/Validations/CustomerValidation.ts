import Joi from "joi";

export const CustomerValidation = Joi.object({
  documentType: Joi.string().min(2).required(),
  document: Joi.number().min(10).required(),
  firstName: Joi.string().min(6).required(),
  lastName: Joi.string().min(6).required(),
  address: Joi.string().min(6).required(),
  billingAddress: Joi.string().min(10).required(),
  telephone: Joi.number().min(7).required(),
  email: Joi.string().min(10).required(),
  category: Joi.string().min(6).required(),
  department: Joi.string().min(6).required(),
  city: Joi.string().min(6).required(),
  observations: Joi.string(),
});

export const CustomerIdValidation = Joi.string().alphanum().required();

export const UpdateCustomerValidation = Joi.object({
  customerId: Joi.string().alphanum().required(),
  firstName: Joi.string().min(6).required(),
  lastName: Joi.string().min(6).required(),
  address: Joi.string().min(6).required(),
  billingAddress: Joi.string().min(10).required(),
  telephone: Joi.number().min(7).required(),
  email: Joi.string().min(10).required(),
  category: Joi.string().min(6).required(),
  department: Joi.string().min(6).required(),
  city: Joi.string().min(6).required(),
  observations: Joi.string(),
});
