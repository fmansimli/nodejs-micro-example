import { connect } from "mongoose";

const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;

class AppMongo {
  static async connect() {
    await connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`);
  }
}

export default AppMongo;
