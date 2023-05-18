import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URI, PORT } from "./configure.js";
import router from "./router/Todo.js";




const app = express();

app.use(express.json());
app.use(cors());


app.use("/todo", router);

app.get("/", (req, res) => {
  res.send({
    data: "me",
    fact: "dig bick",
  });
});

const connect = () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected to DB");
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