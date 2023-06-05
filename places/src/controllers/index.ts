import { RequestHandler } from "express";
import { NotFoundError } from "../errors";
import Place, { IPlace } from "../models/place";

export const create: RequestHandler = async (req, res, next) => {
  const { type, name, desc } = req.body as IPlace;

  try {
    const place = await Place.create({ name, type, desc });
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
    const places = await Place.find();

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

export const getById: RequestHandler = async (req, res, next) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      throw new NotFoundError("Place not found!");
    }

    res.status(200).json({
      place,
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

export const updateById: RequestHandler = async (req, res, next) => {
  const id = req.params.id;
  const attrs = req.body as IPlace;

  try {
    const place = await Place.findByIdAndUpdate(id, { $set: attrs }, { new: true });

    if (!place) {
      throw new NotFoundError("Place not found!");
    }

    res.status(200).json({
      place,
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

export const deleteById: RequestHandler = async (req, res, next) => {
  const id = req.params.id;

  try {
    const place = await Place.findByIdAndDelete(id);

    if (!place) {
      throw new NotFoundError("Place not found!");
    }

    res.status(200).json({
      place: {
        id: req.params.id,
      },
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
