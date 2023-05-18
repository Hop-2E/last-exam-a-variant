import mongoose, { Schema } from "mongoose";

const TodolistSchema = new mongoose.Schema({
  list: {
    type: String,
  },
  date: {
    type: String,
  },
  status: {
    enum: ["true", "false"],
    default: "false",
    type: String,
  },
});

const TodoList = mongoose.model("TodoList", TodolistSchema);

export default TodoList;
