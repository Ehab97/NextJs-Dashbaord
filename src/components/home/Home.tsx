import { BookOpenIcon, UsersIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import React from "react";
import Chart from "./Chart";

export interface IHome {
  userNumbers: number;
  postNumbers: number;
}

const Home: React.FC<IHome> = ({ userNumbers, postNumbers }) => {
  return (
    <div className="py-4 px-6">
      <Head>
        <title>Home Dashboard</title>
      </Head>

      <div className="grid grid-cols-2 gap-8">
        {/* User Section */}
        <div className="bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-xl font-bold text-gray-600 mb-4">Users</h2>
          <div className="flex items-center">
            {/* <div className="w-16 h-16 bg-white rounded-full flex-shrink-0 mr-4 overflow-hidden"> */}
            {/* Add user image or icon here */}
            {/* <img
                src="https://placekitten.com/200/200" // Placeholder image, replace with user image or icon URL
                alt="User"
                className="w-full h-full object-cover"
              /> */}
            {/* </div> */}
            <UsersIcon className="h-32 w-32 text-gray-400 mr-10" />
            <div>
              <div className="text-4xl font-bold text-gray-600">{userNumbers}</div>
              <p className="text-gray-600">Total Users</p>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-xl font-bold text-gray-600 mb-4">Posts</h2>
          <div className="flex items-center">
            <BookOpenIcon className="h-32 w-32 text-gray-400 mr-10" />
            <div>
              <div className="text-4xl font-bold text-gray-600">{postNumbers}</div>
              <p className="text-gray-600">Total Posts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-0 h-64">
        <Chart userNumbers={userNumbers} postNumbers={postNumbers} />
      </div>
    </div>
  );
};

export default Home;
