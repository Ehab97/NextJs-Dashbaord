import { AppContext, NumberType } from "@/components/context/AppProvider";
import { UsersHandler } from "@/components/helpers/api-data";
import Layout from "@/components/layout/Layout";
import { IMeta } from "@/components/layout/Meta";
import Users from "@/components/users/Users";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useContext } from "react";

export const getServerSideProps = (async (context) => {
  const users = await UsersHandler.getUsers();
  console.log({ users });
  return { props: { users } };
}) satisfies GetServerSideProps<{
  users: any;
}>;

const Index = ({ users }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const meta: IMeta = {
    title: "Users Index",
    description: "This page has the full list of users",
  };
  return (
    <Layout meta={meta}>
      <Users users={users} />
    </Layout>
  );
};

export default Index;
