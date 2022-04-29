import { MovieBox } from 'components/movie-box';
import { Paginator } from 'components/paginator';
import useMovie from 'common/hooks/movie.hook';
import { NextPage } from 'next';
import React from 'react';
import { movieConverter } from 'utils';

import dbConnect from '../lib/dbConnect';
import MovieSchema, { Movie, MovieBe } from '../models/movie';

const Home: NextPage<{
  /*movies: Movie[]*/
}> = () => {
  const { movies, total, isLoading, setPagination } = useMovie({ limit: 10, offset: 0 });

  const handlePageChange = (page: number) => setPagination({ limit: 10, offset: (page - 1) * 10 });

  return (
    <>
      <div className='grid grid-cols-3 gap-4'>
        {movies && movies.map(movie => <MovieBox key={movie.id} movie={movie} />)}
        <button onClick={() => setPagination(prev => ({ limit: 1, offset: prev.offset + 1 }))}>+</button>
        <button onClick={() => setPagination(prev => ({ limit: 1, offset: prev.offset - 1 }))}>-</button>
      </div>
      {total && <Paginator total={total || 0} handlePageChange={handlePageChange} />}
    </>
  );
};

export default Home;

/* Retrieves pet(s) data from mongodb database */
/* export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database 
  const result: MovieBe[] = await MovieSchema.find({}).limit(10);
  return { props: { movies: JSON.parse(JSON.stringify(result.map(movieBe => movieConverter(movieBe)))) } };
} */
