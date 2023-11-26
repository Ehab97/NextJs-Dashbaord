import React from "react";
import Layout from "@/components/layout/Layout";
import Home from "@/components/home/Home";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { PostsHandler, UsersHandler } from "@/components/helpers/api-data";
import { IMeta } from "@/components/layout/Meta";
export const getServerSideProps = (async (context) => {
  const [users, posts] = await Promise.all([UsersHandler.getUsers(), PostsHandler.getPosts()]);

  return { props: { users, posts } };
}) satisfies GetServerSideProps<{
  users: any;
  posts: any;
}>;

const Dashbaord = ({ users, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const meta: IMeta = {
    title: "Dashbaord",
    description: `this is page for shoing ststicsc  for dashboard`,
  };
  return (
    <Layout meta={meta}>
      <Home userNumbers={users.length} postNumbers={posts.length} />
    </Layout>
  );
};

export default Dashbaord;
