import { Document, model, Schema } from "mongoose";
import { Log } from "../../types/graphql";

const logSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    visitedDate: {
      type: Date,
      required: true,
    },
    comments: [String],
    image: String,
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const LogModel = model<Log & Document>("Log", logSchema);
