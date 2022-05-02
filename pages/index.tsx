import axios from 'axios';
import useMovie, { MoviesWithPagination } from 'common/hooks/movie.hook';
import { MovieBox } from 'components/movie-box';
import { Paginator } from 'components/paginator';
import { NextPage } from 'next';
import React from 'react';
import { movieConverter } from 'utils';

import dbConnect from '../lib/dbConnect';
import MovieSchema, { Movie, MovieBe } from '../models/movie';

const Home: NextPage<{
  moviesWithPagination: MoviesWithPagination;
}> = ({ moviesWithPagination }) => {
  const { movies, total, isLoading, setPagination } = useMovie(
    { limit: 10, offset: 0 },
    moviesWithPagination
  );

  const handlePageChange = (page: number) => setPagination({ limit: 10, offset: (page - 1) * 10 });

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {movies && movies.map(movie => <MovieBox key={movie.id} movie={movie} />)}
      </div>
      {total && <Paginator total={total || 0} handlePageChange={handlePageChange} />}
    </>
  );
};

export default Home;

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  // await dbConnect();
  // const result: MovieBe[] = await MovieSchema.find({}).limit(10);
  const moviesWithPagination: MoviesWithPagination = await axios
    .get(`http://localhost:3001/api/movies/pagination?limit=${10}&offset=${0}`)
    .then(res => res.data);
  // return { props: { movies: JSON.parse(JSON.stringify(result.map(movieBe => movieConverter(movieBe)))) } };
  return { props: { moviesWithPagination } };
}
