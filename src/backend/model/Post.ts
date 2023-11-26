// models/Post.js
import { PostsType } from "@/components/types/post";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const postSchema = new mongoose.Schema<PostsType>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
