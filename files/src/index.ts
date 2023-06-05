import http from "http";
import app from "./app";

import { Logger } from "./services";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4005;
const APP_HOST = process.env.APP_HOST;
const APP_NAME = process.env.APP_NAME;

if (!process.env.MONGO_HOST) {
  throw new Error("MONGO_HOST must be defined");
}

const bootstrap = async () => {
  try {
    httpServer.listen(PORT, () => {
      Logger.log(`** listening on ${APP_HOST} (${APP_NAME})`);
    });
  } catch (error) {
    process.exit(1);
  }
};

bootstrap();
