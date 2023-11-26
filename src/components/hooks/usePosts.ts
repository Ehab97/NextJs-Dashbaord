// usePosts.js
import useSWR from "swr";
import { BASE_URL } from "../helpers/api-data";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";

const fetcher = async (urls: string[]) => {
  const responses = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
  return responses;
};

export const usePosts = () => {
  const { data, error } = useSWR(["/api/posts", `${BASE_URL}posts`], fetcher);

  return {
    postsData: data,
    isLoading: !error && !data,
    isError: error,
  };
};
