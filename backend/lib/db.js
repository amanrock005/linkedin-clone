import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`error connecting to mongodb: ${error.message}`);
    process.exit(1);
  }
};
