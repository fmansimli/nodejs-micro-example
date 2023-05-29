import { RequestHandler } from "express";

export const getProfile: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      user: {
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

export const updateProfile: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      user: {
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

export const deleteProfile: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
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
