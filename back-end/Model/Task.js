import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true],
    },
    isDone : {
        type : Boolean,
        default : "false",
        required : [true]
    },
    createdDate : {
        type : Date,
        required : [true]
    }
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);


const Task = mongoose.model("Task", TaskSchema);

export default Task;