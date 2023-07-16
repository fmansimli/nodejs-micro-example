import { Schema, model } from "mongoose";

export interface IPlace {
  _id?: Schema.Types.ObjectId;
  name: string;
  desc: string;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const placeSchema = new Schema<IPlace>(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

export default model<IPlace>("PLace", placeSchema);
