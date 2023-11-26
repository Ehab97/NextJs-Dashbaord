import React from "react";
import { UserProps } from "../types/user";
import Link from "next/link";
import Image from "next/image";

const UserDetails: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="p-4 max-w-3xl mx-auto border user bg-white space-y-8">
      <div className="flex items-center mb-4">
        {/* <img
          src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
          alt={user.name}
          className="w-16 h-16 rounded-full mr-4 shadow-lg"
        /> */}
        <Image
          src={`https://randomuser.me/api/portraits/men/${user.id}.jpg`}
          alt={user.name}
          className="w-16 h-16 rounded-full mr-4 shadow-lg"
          // layout="fill"
          // objectFit="contain"
          width={100}
          height={100}
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-600">User Profile</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Address:</span> {user.address.street}, {user.address.suite},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {user.website}
          </a>
        </p>
      </div>
      <Link
        href={`/users/${user.id}/posts`}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 block text-center text-lg font-semibold w-80 mx-auto"
      >
        View User&apos;s Posts
      </Link>
    </div>
  );
};

export default UserDetails;
