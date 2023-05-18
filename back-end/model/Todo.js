import mongoose, { Schema } from "mongoose";



const TodoSchema = new mongoose.Schema({
    text: {
      type: String,
      required: [true],
    },
    isDone: {
        type:Boolean,
        default:false
    },
    date: {
        type: String
    }
  });


  const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;