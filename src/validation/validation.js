import Joi from '@hapi/joi';

// Register Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return schema.validate(data);
};

// Task Validation
const taskValidation = (data) => {
    const schema = Joi.object({
        summary: Joi.string()
            .required(),
        description: Joi.string()
            .required(),
        createdBy: Joi.string()
            .required(),
        closed: Joi.boolean()
            .default(false),
        closedBy: Joi.String()
    });

    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation,
    taskValidation
}