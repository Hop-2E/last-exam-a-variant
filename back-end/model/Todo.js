import mongoose, { Schema } from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
    default: Date,
  },
});

const Todo = mongoose.model("Post", TodoSchema);
export default Todo;
