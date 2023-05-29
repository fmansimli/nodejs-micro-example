import { RequestHandler } from "express";

export const validate: RequestHandler = (req, res, next) => {
  try {
    return next();
  } catch (error) {
    next(error);
  }
};
