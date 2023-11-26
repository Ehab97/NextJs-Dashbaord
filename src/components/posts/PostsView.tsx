import React from "react";
import Post from "./Post";
import PostCard from "./PostCard";
import Link from "next/link";
import Code from "../../../public/images/altumcode.jpg";
import { PostsType } from "../types/post";
import { useRouter } from "next/router";
import AddPost from "./AddPost";

interface IPostsViewProps {
  posts: PostsType[];
}

const PostsView: React.FC<IPostsViewProps> = ({ posts }) => {
  const route = useRouter();

  return (
    <>
      <AddPost />
      {posts.length > 0 ? (
        <section className="flex flex-wrap items-center justify-center">
          {/* <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3"> */}
          {posts.map((post: any) => {
            return (
              <Link
                key={post.id}
                href={`${route.asPath}/${post.id}`}
                className="flex-shrink-0 m-6 max-w-xs shadow-lg me-8"
              >
                <Post post={post} />
                {/* <PostCard
                  title={post.title}
                  body={post.body}
                  imageUrl={`https://randomuser.me/api/portraits/men/${post.id}.jpg`}
                  id={post.id}
                /> */}
              </Link>
            );
          })}
        </section>
      ) : (
        <p>No Posts</p>
      )}
    </>
  );
};

export default React.memo(PostsView);
