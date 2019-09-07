import * as Joi from "joi";
export const validate = require('express-validation');

export let EmptySchema = {
  body: Joi.object({

  }).unknown(false)
}

export let LoginSchema = {
  body: Joi.object({
    "email": Joi.string().required(),
    "password": Joi.string().required()
  }).unknown(false)
}

export let CreateExampleSchema = {
  body: Joi.object({
    "name": Joi.string().required()
  }).unknown(false)
}

export let UpdateExampleSchema = {
  body: Joi.object({
    "name": Joi.string()
  }).unknown(false)
}
