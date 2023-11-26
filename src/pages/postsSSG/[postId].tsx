import React from "react";
import Layout from "@/components/layout/Layout";
import PostDetails from "@/components/posts/PostDetails";
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from "next";
import { PostsType } from "@/components/types/post";
import { useRouter } from "next/router";
import Loader from "@/components/ui/Loaders";
import { PostsHandler } from "@/components/helpers/api-data";
import { IMeta } from "@/components/layout/Meta";

export const getStaticPaths = (async () => {
  const posts = await PostsHandler.getPosts();

  // Generate paths for each post based on their id
  const paths = posts.map((post: PostsType) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: true, // false or " "
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  console.log("re-generating....");
  const postId: any = context.params?.postId;
  const post = await PostsHandler.getPost(postId);
  console.log({ post });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
}) satisfies GetStaticProps<{
  post: PostsType;
}>;

const PostPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
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

export default PostPage;
