import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../utils/constants.js";
const app = express();
// function connectDB() {}
// connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${streaming}`);
//     app.on("error", (err) => {
//       console.log("❌ this is the error : ", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`🔥 surver is running on port ${process.env.PORT}`);
//     });
//   } catch(error) {
//     console.log(`❌ ERROR : `,error)
//   }
// })();

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
  } catch (error) {
    console.log(`❌ ERROR : `, error);
  }
};

// connectDB()

export default connectDB;
