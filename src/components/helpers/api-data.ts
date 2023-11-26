import db from "@/backend/db";
import { PostsType } from "../types/post";
import Post from "@/backend/model/Post";

export const BASE_URL = `https://jsonplaceholder.typicode.com/`;
export const PostsHandler = {
  getPosts: async () => {
    const res = await fetch(`${BASE_URL}posts`);
    const posts = await res.json();
    return posts;
  },
  getLocalPosts: async () => {
    try {
      // const data = await fetch("/api/posts");
      // const posts = await data.json();
      await db;
      const posts: any = await Post.find().sort({ createdAt: -1 });
      const plainObjects = posts.map((post: any) => post.toObject());
      console.log("posts db", posts, plainObjects);
      const data: PostsType[] = plainObjects.length
        ? plainObjects.map((post: any) => ({
            ...post,
            id: post._id.toString(), // Convert ObjectId to string
            _id: post._id.toString(),
            createdDate: post.createdDate.toISOString(),
          }))
        : [];
      console.log({ data });
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  // getPosts: async () => {
  //   try {
  //     const [externalRes, internalRes] = await Promise.all([
  //       fetch(`${BASE_URL}posts`), // External API
  //       fetch("/api/posts"), // Internal API route
  //     ]);

  //     // Handle responses
  //     const externalPosts = await externalRes.json();
  //     const internalPosts = await internalRes.json();

  //     console.log("External API Posts:", externalPosts);
  //     console.log("Internal API Posts:", internalPosts);

  //     // Combine or use the data as needed
  //     const combinedPosts: any = [...externalPosts, ...internalPosts];

  //     return combinedPosts;
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //     throw error; // Rethrow the error to be caught elsewhere if needed
  //   }
  // },
  getPost: async (postId: number) => {
    const res = await fetch(`${BASE_URL}posts/${postId}`);
    const post = await res.json();
    return post;
  },
  getPostsForUser: async (userId: number) => {
    const res = await fetch(`${BASE_URL}posts?userId=${userId}`);
    const posts = await res.json();
    return posts;
  },
};

export const UsersHandler = {
  getUsers: async () => {
    const res = await fetch(`${BASE_URL}users`);
    const users = await res.json();
    return users;
  },
  getUser: async (userId: number) => {
    const res = await fetch(`${BASE_URL}users/${userId}`);
    const user = await res.json();
    return user;
  },
};
