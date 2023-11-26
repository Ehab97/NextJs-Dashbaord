import Layout from "@/components/layout/Layout";
import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps, GetStaticProps } from "next";
import { PostsType } from "@/components/types/post";
import PostsView from "@/components/posts/PostsView";
import { PostsHandler } from "@/components/helpers/api-data";
import { IMeta } from "@/components/layout/Meta";
import { useRouter } from "next/router";
import Loader from "@/components/ui/Loaders";

export const getServerSideProps = (async (context) => {
  const userId: any = context.query.userId;
  const posts = await PostsHandler.getPostsForUser(userId);
  console.log({ posts });
  return { props: { posts } };
}) satisfies GetServerSideProps<{
  posts: PostsType;
}>;

const UserPostsPage = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const meta: IMeta = {
    title: "Posts for user",
    description: "Posts for user with optional description and description description",
  };

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <Layout meta={meta}>
      <PostsView posts={posts} />
    </Layout>
  );
};

export default UserPostsPage;
