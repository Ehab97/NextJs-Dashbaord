import React from "react";
import Layout from "@/components/layout/Layout";
import PostDetails from "@/components/posts/PostDetails";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import { PostsType } from "@/components/types/post";
import { useRouter } from "next/router";
import Loader from "@/components/ui/Loaders";
import { PostsHandler } from "@/components/helpers/api-data";
import { IMeta } from "@/components/layout/Meta";

export const getServerSideProps: GetServerSideProps<{ post: PostsType }> = async (context) => {
  const postId: any = context.query.postId;
  const post = await PostsHandler.getPost(postId);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
};

const PostPage: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ post }) => {
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
