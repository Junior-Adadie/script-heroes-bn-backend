import Joi from '@hapi/joi';

export default (req, res, next) => {
    const schema = Joi.object({
        accommodationId: Joi.number()
            .required()
            .messages({
                'string.empty': res.__("Id of an accomodation cannot be empty"),
                'any.required': res.__('Id of an accomodation is required')
            }),
        roomId: Joi.number()
            .required()
            .messages({
                'string.empty': res.__("Id of a room cannot be empty"),
                'any.required': res.__('Id of a room is required')
            }),
    })

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    return next();
}