import mongoose, {Schema } from "mongoose";

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  isDone:{
    type : Boolean,
    default : false,
  },
  createdDate:{
    type: Date,
  }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } });

const Post = mongoose.model("Post", PostSchema);
export default Post;