import db from "../db";
import Post from "../model/Post";
import type { NextApiRequest, NextApiResponse } from "next";

export const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db;
    const { title, body } = req.body;
    console.log(req.body, !title || !body);
    if (!title || !body) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newPost = new Post({
      title,
      body,
    });

    const savedPost = await newPost.save();

    res.status(201).json({ post: savedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  try {
    await db;
    const posts = await Post.find({}).sort({ createdAt: -1 }); // Fetch posts sorted by createdAt in descending order
    console.log({ posts });
    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getPostById = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { postId },
    method,
  } = req;

  try {
    await db;

    const post = await Post.findById(postId);

    if (post) {
      res.status(200).json({ post });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
