import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import listRouter from "./router/todolists.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/todolist", listRouter);

const uri = process.env.MONGO_ATLAS_URI || "";
const port = process.env.PORT || 4900;

const connect = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error("Couldnt Connect");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
