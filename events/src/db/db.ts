import { connect } from "mongoose";

const MONGO_HOST = process.env.MONGO_HOST;

class AppMongo {
  static async connect() {
    await connect(`http://${MONGO_HOST}:27017/placedb`);
  }
}

export default AppMongo;

