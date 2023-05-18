import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    text: String,
    isDone: {
      type: 'boolean',
      default: false,
    },
    createdDate: Date,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;