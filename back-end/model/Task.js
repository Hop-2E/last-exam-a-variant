import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    require: [true, "bichne uu"],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
  createdDate: {
    type: Date,
  },
});

const Task = mongoose.model("Task", TaskSchema);
export default Task;
