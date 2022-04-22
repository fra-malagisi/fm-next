import { PaginationQuery } from 'models';
import { Movie } from 'models/movie';
import { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';

import fetcher from './utils/fetcher';

const useMovie = (
  paginationQuery: PaginationQuery
): {
  setPagination: Dispatch<SetStateAction<PaginationQuery>>;
  movies: Movie[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
} => {
  const host = `${process.env.NEXT_PUBLIC_API_HOST}`;
  const [pagination, setPagination] = useState<PaginationQuery>(paginationQuery);
  const { data, error } = useSWR<Movie[], Error>(
    `http://localhost:3001/api/movies/pagination?limit=${pagination.limit}&offset=${pagination.offset}`,
    fetcher,
    {}
  );

  return {
    setPagination,
    movies: data,
    error,
    isLoading: !data && !error,
  };
};

export default useMovie;
