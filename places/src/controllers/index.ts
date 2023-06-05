import { RequestHandler } from "express";
import place from "src/models/place";
import PLace, { IPlace } from "src/models/place";

export const create: RequestHandler = async (req, res, next) => {
  const { type, name, desc } = req.body as IPlace;

  try {
    const place = await PLace.create({ name, type, desc });
    res.status(201).json({
      place,
      meta: {
        url: req.originalUrl,
        method: req.method,
        ip: req.ip,
        env: process.env.NODE_ENV,
        appName: process.env.APP_NAME,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const places = await place.find();

    res.status(200).json({
      places,
      meta: {
        ip: req.ip,
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
      place: {
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
      place: {
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
      place: {
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
