import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port);
    console.log(
      `Server running on PORT ${port} and Database has successfully connected!🕊️`
    );
  } catch (error) {
    console.log(`Server & Database could not connect:`, error);
  }
})();

export default app;
