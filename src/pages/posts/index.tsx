import { PostsHandler } from "@/components/helpers/api-data";
import { useMultiUrlQuery } from "@/components/hooks/useMultiUrlQuery";
import Layout from "@/components/layout/Layout";
import { IMeta } from "@/components/layout/Meta";
import PostsView from "@/components/posts/PostsView";
import { PostsType } from "@/components/types/post";
import Loader from "@/components/ui/Loaders";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import React from "react";

export const getStaticProps = (async (context) => {
  const posts = await PostsHandler.getPosts();
  const local = await PostsHandler.getLocalPosts();
  const merged: any = [...local, ...posts];
  console.log({ local });
  return { props: { intilaPosts: merged }, revalidate: 60, notFound: false };
}) satisfies GetStaticProps<{
  intilaPosts: PostsType;
}>;

const Posts = ({ intilaPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, isLoading, isError } = useMultiUrlQuery(["/api/posts"], async () => {
    const response = await fetch("/api/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    console.log({ posts: data.posts });
    return data.posts.reverse();
  });
  const meta: IMeta = {
    title: "Posts",
    description: `this is page for shwoing full lists of posts`,
  };
  console.log({ intilaPosts, data });
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Layout meta={meta}>
      <PostsView posts={data ?? intilaPosts} />
    </Layout>
  );
};

export default Posts;
