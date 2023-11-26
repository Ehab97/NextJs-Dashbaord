import Image from "next/image";
import React from "react";
import Code from "../../../public/images/altumcode.jpg";
import { PostsType } from "../types/post";
import { useRouter } from "next/router";
interface IPostProps {
  post: PostsType;
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const route = useRouter();

  return (
    <div className="post">
      <div className="rounded">
        {/* <img
          src={Code}
          alt="Postcard image"
          className="object-cover w-full h-40 rounded"
        /> */}
        <Image src={Code} alt="Picture of the author" className="w-100 h-64 object-cover" />
      </div>
      <div className="p-4 text-black">
        <h1 className="line-clamp-1">{post.title}</h1>
        {/* <p className="line-clamp-1">{post.body}</p> */}
      </div>
    </div>
  );
};

export default Post;
