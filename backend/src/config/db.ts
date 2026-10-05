import mongoose from "mongoose";
import env from "./env.js";
const connectDB = async () => {
  if (!env.DB) {
    throw new Error("Database is missing");
  }
  await mongoose.connect(env.DB);
  console.log("Database connected!");
};
export default connectDB;
