const Joi = require('joi');

function registerValidate(data) {
  const schema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().required().min(3),
    password: Joi.string().required().min(6),
  });

  return schema.validate(data);
}

function loginValidate(data) {
  const schema = Joi.object({
    email: Joi.string().required().min(3),
    password: Joi.string().required().min(6),
  });

  return schema.validate(data);
}

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;
