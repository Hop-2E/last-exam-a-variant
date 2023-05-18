import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/todo.js";

dotenv.config();
const uri = process.env.MONGO_URI || "";
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri, {})

    .then(() => {
      console.log("Successfully connected mongodb");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

app.listen(port, async () => {
  console.log(`App running: ${port}`);
  connect();
});
