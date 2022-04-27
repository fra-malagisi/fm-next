import { PaginationQuery } from 'models';
import { Movie } from 'models/movie';
import { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';

import fetcher from './utils/fetcher';

export type MoviesWithPagination = {
  movies: Movie[];
  total: number;
};

const useMovie = (
  paginationQuery: PaginationQuery
): {
  setPagination: Dispatch<SetStateAction<PaginationQuery>>;
  movies: Movie[] | undefined;
  total: number | undefined;
  error: Error | undefined;
  isLoading: boolean;
} => {
  const host = `${process.env.NEXT_PUBLIC_API_HOST}`;
  const [pagination, setPagination] = useState<PaginationQuery>(paginationQuery);
  const { data, error } = useSWR<MoviesWithPagination, Error>(
    `http://localhost:3001/api/movies/pagination?limit=${pagination.limit}&offset=${pagination.offset}`,
    fetcher,
    {}
  );

  return {
    setPagination,
    movies: data && data.movies,
    total: data && data.total,
    error,
    isLoading: !data && !error,
  };
};

export default useMovie;
