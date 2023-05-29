import { ErrorRequestHandler, RequestHandler } from "express";

export const catch404: RequestHandler = (req, res, next) => {
  try {
    res.status(404).json({ httpCode: 404 });
  } catch (error) {
    next(error);
  }
};

export const catchError: ErrorRequestHandler = (err, req, res, next) => {
  try {
    res.status(500).json({ httpCode: 500 });
  } catch (error) {
    res.status(500).json({ httpCode: 500 });
  }
};
