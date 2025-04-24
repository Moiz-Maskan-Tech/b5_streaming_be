import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("❌ this is the error : ", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`🔥 surver is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed  : ", err);
  });
