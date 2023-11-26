import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { PostsType } from "@/components/types/post";
import PostDetails from "@/components/posts/PostDetails";
import { PostsHandler } from "@/components/helpers/api-data";
import { IMeta } from "@/components/layout/Meta";

export const getServerSideProps: GetServerSideProps<{ post: PostsType }> = async (context) => {
  console.log(context.query);
  const postSlug = context.query.postSlug;
  let post: any = {};
  if (Array.isArray(postSlug) && postSlug.length > 0) {
    const promises = postSlug.map((postId: any) => {
      const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      return PostsHandler.getPost(postId);
    });
    const posts = await Promise.all(promises);
    post = posts[0];
  }
  return { props: { post: post } };
};

const PostForUserPage: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ post }) => {
  const router = useRouter();
  const meta: IMeta = {
    title: post.title,
    description: `this is ${post.title} page`,
  };
  return (
    <Layout meta={meta}>
      <PostDetails
        title={post.title}
        body={post.body}
        imageUrl="post-image-url.jpg"
        createdDate=""
        userName="John Doe"
      />
    </Layout>
  );
};

export default PostForUserPage;
