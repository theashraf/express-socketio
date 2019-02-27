import Joi from 'joi'

export const uploadFileSchema = Joi.object().keys({
	id: Joi.string().required()
})
