import React from "react";
import { generateRandomDate } from "../common/helpers";
import Link from "next/link";
import Image from "next/image";

interface PostDetailsProps {
  title: string;
  body: string;
  imageUrl: string;
  id: number;
}

const PostCard: React.FC<PostDetailsProps> = ({ title, body, imageUrl, id }) => {
  const userName = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Helen", "Ivy", "Jack"];
  const blogCategories = ["Technology", "Travel", "Food", "Fashion", "Health", "Lifestyle", "Sports", "Entertainment"];
  const [randomDate, setRandomDate] = React.useState(null);

  React.useEffect(() => {
    const date: any = generateRandomDate(1, 365); // Generate a random date within the last year
    setRandomDate(date);
  }, []);
  return (
    <div className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        {randomDate && (
          <time dateTime={randomDate} className="text-gray-500">
            {randomDate}
          </time>
        )}
        <Link
          href={`#`}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {/* make id dostent exoise 8  */}
          {blogCategories[id > 8 ? 3 : id]}
        </Link>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`#`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{body}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        {/* <img src={imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
        <Image
          src={imageUrl}
          alt={title}
          className="h-10 w-10 rounded-full bg-gray-50"
          objectFit="cover"
          width={100}
          height={100}
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link href={`#`}>
              <span className="absolute inset-0" />
              {userName[id > 10 ? 3 : id]}@{id > 10 ? 3 : id}
            </Link>
          </p>
          <p className="text-gray-600">Frontend</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PostCard);
