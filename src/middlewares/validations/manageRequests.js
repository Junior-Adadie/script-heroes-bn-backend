import joi from '@hapi/joi'

const action = (req,res,next)=>{
    const schema = joi.object({
        id: joi.number().required().messages({
            'number.base': 'Request id  must be a number',
            'any.required': 'Request id is required'
          }),
          requestType: joi.number().required().messages({
            'number.base': 'Request type  must be a number',
            'any.required': 'Request type is required'
          }),
          requestedOn: joi.date().required().messages({
            'date.base': 'Request date must be a date',
            'date.empty': "Request date can't be empty",
            'any.required': 'Request date is required'
          }),
        requester: joi.string().required().messages({
            'string.base': 'Requester must contain letters only',
            'string.empty': "Requester can't be empty",
            'any.required': 'Requester is required'
          }),
          reason: joi.string().required().messages({
            'string.base': 'Reason must contain letters only',
            'string.empty': "Reason can't be empty",
            'any.required': 'Reason is required'
          }),
        status: joi.string().valid('pending','approved','canceled').messages({
            'string.base': res.__('Status must be a string')
        }),
        action: joi.string().valid('approve','cancel').messages({
            'string.base': res.__('Action must be a string')
        }),
    })
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ error: error.details[0].message });
    return next()
}
export default action;