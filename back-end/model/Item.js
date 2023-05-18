import mongoose, { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  isDone:{
    type:Boolean,
    enum: ["true", "false"],
    default: "false"
  },
  date:{
    type: Date, default: Date,
  },
});
const Item = mongoose.model("Item", ItemSchema);
export default Item;
