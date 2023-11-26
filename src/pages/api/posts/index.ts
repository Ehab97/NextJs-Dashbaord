// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createPost, getPostById, getPosts } from "@/backend/controller/PostController";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  title: string;
  body: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    getPosts(req, res)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.method === "POST") {
    createPost(req, res)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
