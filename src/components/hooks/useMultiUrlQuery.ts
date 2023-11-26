// useMultiUrlQuery.ts
import { useQuery, UseQueryOptions } from "react-query";

type QueryFunction<T> = () => Promise<T>;

export const useMultiUrlQuery = <T>(urls: string[], queryFunction: QueryFunction<T>, options?: UseQueryOptions<T>) => {
  const queries = urls.map((url) => useQuery<T>(url, queryFunction, options));
  console.log({ queries });
  return {
    data: queries.map((query) => query.data).flat(),
    isLoading: queries.some((query) => query.isLoading),
    isError: queries.some((query) => query.isError),
  };
};
