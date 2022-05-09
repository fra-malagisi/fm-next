import { PaginationQuery } from 'models';
import { Movie } from 'models/movie';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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
  const [total, setTotal] = useState<number>(0);
  const { data, error } = useSWR<MoviesWithPagination, Error>(
    `http://localhost:3001/api/movies/pagination?limit=${pagination.limit}&offset=${pagination.offset}${
      pagination.title ? `&title=${pagination.title}` : ''
    }`,
    fetcher
  );

  useEffect(() => {
    if (data && data?.total > 0 && data?.total !== total) {
      setTotal(data?.total || 0);
    }
  }, [data?.total, total]);

  return {
    setPagination,
    movies: !data && !error ? [] : data && data.movies,
    total,
    error,
    isLoading: !data && !error,
  };
};

export default useMovie;
