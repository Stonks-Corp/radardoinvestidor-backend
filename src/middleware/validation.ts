import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

enum Property {
  body = 'body',
  queryparams = 'queryparams',
}

const validationMiddleware = (schema: Joi.ObjectSchema, property: Property) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = schema.validate(req[property]);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');

    res.status(400).json({ error: message });
  }
};

export default validationMiddleware;
