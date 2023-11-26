import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "@/components/layout/Layout";
import UserDetails from "@/components/users/UserDetails";
import { IUserProps, UserProps } from "@/components/types/user";
import { UsersHandler } from "@/components/helpers/api-data";
import { IMeta } from "@/components/layout/Meta";

export const getServerSideProps: GetServerSideProps<{ user: IUserProps }> = async (context) => {
  const userId: any = context.query.userId;
  const user = await UsersHandler.getUser(userId);
  return { props: { user } };
};

const UserPage: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ user }) => {
  const meta: IMeta = {
    title: user.name,
    description: `this is ${user.name} page`,
  };
  return (
    <Layout meta={meta}>
      <UserDetails user={user} />
    </Layout>
  );
};

export default UserPage;
