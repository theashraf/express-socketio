import Joi from 'joi'

export const validateBody = schema => (req, res, next) => {
	const { error, value } = Joi.validate(req.body, schema)
	if (error) throw new Error(error.details[0].message)
	req.body = value
	next()
}
