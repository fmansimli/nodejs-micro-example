import { RequestHandler } from "express";

export const getAll: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      files: [],
      meta: {
        url: req.originalUrl,
        method: req.method,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      file: {
        id: req.params.id,
      },
      meta: {
        url: req.originalUrl,
        method: req.method,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      file: {
        id: req.params.id,
      },
      meta: {
        url: req.originalUrl,
        method: req.method,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteById: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      file: {
        id: req.params.id,
      },
      meta: {
        url: req.originalUrl,
        method: req.method,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
      },
    });
  } catch (error) {
    next(error);
  }
};
