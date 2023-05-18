import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRouter from "./router/Todo.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", todoRouter);

dotenv.config();
const uri = process.env.MONGODB || ``;
const port = process.env.PORT || 5000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to mongoDataBase");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server listening on port ${port}`);
});