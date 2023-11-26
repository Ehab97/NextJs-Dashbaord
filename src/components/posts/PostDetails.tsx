import React, { useEffect, useState } from "react";
import Image from "next/image";
import PostImage from "../../../public/images/nathan.jpg";
import UserImage from "../../../public/images/user.jpg";

import { format } from "date-fns";
import { generateRandomDate } from "../common/helpers";

interface PostDetailsProps {
  title: string;
  body: string;
  imageUrl: string;
  createdDate: string;
  userName: string;
}

const PostDetails: React.FC<PostDetailsProps> = ({ title, body, imageUrl, createdDate, userName }) => {
  const [randomDate, setRandomDate] = useState(null);

  useEffect(() => {
    const date: any = generateRandomDate(1, 365); // Generate a random date within the last year
    setRandomDate(date);
  }, []);
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg">
        <Image src={PostImage} alt="Post Image" className="w-full h-48 object-cover rounded-t-lg" objectFit="cover" />
        <div className="p-6">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-gray-500 text-sm mt-2">Created on {randomDate && format(randomDate, "yyyy-MM-dd")}</p>
          <p className="text-gray-600 mt-4">{body}</p>
          <div className="mt-4">
            <div className="flex items-center">
              <Image src={UserImage} alt="User Avatar" className="w-8 h-8 rounded-full object-cover" />
              <p className="ml-2">{userName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
