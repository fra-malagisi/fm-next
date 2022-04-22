import { MovieBox } from 'components/movie-box';
import { NextPage } from 'next';
import React from 'react';
import { movieConverter } from 'utils';

import dbConnect from '../lib/dbConnect';
import MovieSchema, { Movie, MovieBe } from '../models/movie';

const Home: NextPage<{ movies: Movie[] }> = ({ movies }) => {
  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {movies && movies.map(movie => <MovieBox key={movie.id} movie={movie} />)}
      </div>
    </>
  );
};

export default Home;

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result: MovieBe[] = await MovieSchema.find({}).limit(10);
  return { props: { movies: JSON.parse(JSON.stringify(result.map(movieBe => movieConverter(movieBe)))) } };
}
