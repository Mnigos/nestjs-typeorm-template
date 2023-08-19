import * as Joi from 'joi'

/* eslint-disable import/namespace */
export const environmentValidationSchema = Joi.object({
  PORT: Joi.number().default(4000),
})
/* eslint-enable import/namespace */
