const joi = require('joi');

const authSchema = joi.object({
  email: joi.string().email().lowercase().required(),
  password: joi.string().min(8).required(),
});

module.exports = {
  authSchema,
};
