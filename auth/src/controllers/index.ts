import { RequestHandler } from "express";

export const signIn: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      user: req.body,
      meta: {
        url: req.originalUrl,
        method: req.method,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
        ip: req.ip,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signUp: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json({
      user: req.body,
      meta: {
        url: req.originalUrl,
        method: req.method,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
        ip: req.ip,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout: RequestHandler = (req, res, next) => {
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
