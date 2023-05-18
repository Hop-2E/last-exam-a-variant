import express from "express";
import mongoose from "mongoose";
import router from "./router/task.js";
import cors from "cors";

const mongo =
  "mongodb+srv://tuguldurExam:Mehhh99757057@cluster0.oncmbqa.mongodb.net/";
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(mongo, {})

    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

app.get("/", (req, res) => {
  console.log("Todo list backend");
  res.send("Todo list backend");
});

app.get("/test", (req, res) => {
  console.log("This is test endpoint");
  res.send("This is test endpoint");
});

app.listen(port, async () => {
  console.log("Succesfully connected mongodb");
  connect();
});
