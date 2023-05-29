import http from "http";
import app from "./app";

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 4001;
const APP_HOST = process.env.APP_HOST;

const bootstrap = async () => {
  try {
    httpServer.listen(PORT, () => {
      console.log(`** listening on http://${APP_HOST}`);
    });
  } catch (error: any) {
    console.error(`$$ error=> ${error.message}`);
  }
};

bootstrap();
