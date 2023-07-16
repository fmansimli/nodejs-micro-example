import { Request } from "express";

export class Meta {
  static build(req: Request) {
    return {
      ip: req.ip,
      url: req.originalUrl,
      method: req.method,
      env: process.env.NODE_ENV,
      appName: process.env.APP_NAME,
    };
  }
}
