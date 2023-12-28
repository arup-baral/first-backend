import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n 🟢 MongoDB connected !! DB host: ${connection.connection.host} at port: ${connection.connection.port}`
    );
  } catch (error) {
    console.log("\n ❌ MONGODB CONNECTION ERROR ", error);
    process.exit(1);
  }
};

export default connectDB;
