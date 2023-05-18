import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URI, PORT } from "./config.js";
import task from "./router/task.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", task);

const connect = () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Successfully connected mongodb");
    });
  } catch (error) {
    console.error("could not connect to DB");
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  connect();
  console.log("server running on " + PORT);
});