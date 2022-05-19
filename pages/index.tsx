import axios from 'axios';
import useMovie, { MoviesWithPagination } from 'common/hooks/movie.hook';
import { Input } from 'components';
// import { Button } from 'components/button';
import { MovieBox } from 'components/movie-box';
import { Paginator } from 'components/paginator';
import { NextPage } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { movieConverter } from 'utils';

// import dbConnect from '../lib/dbConnect';
// import MovieSchema, { Movie, MovieBe } from '../models/movie';

type MoviesSearchFormType = {
  filter: string;
};

const Home: NextPage<unknown> = () => {
  const { movies, total, isLoading, setPagination } = useMovie({ limit: 10, offset: 0 });

  const { register, handleSubmit } = useForm<MoviesSearchFormType>();

  const handleSearch = (data: MoviesSearchFormType) =>
    setPagination({ limit: 10, offset: 0, title: data.filter });

  const handlePageChange = (page: number) => setPagination({ limit: 10, offset: (page - 1) * 10 });

  return (
    <>
      <div className='mb-4 flex justify-center'>
        <form className='w-4/12' onSubmit={handleSubmit(handleSearch)}>
          <div className='flex items-center'>
            <Input label='Filter movies' withAction={true} {...register('filter')} />
          </div>
        </form>
      </div>
      <div className='mb-4 grid grid-cols-3 gap-4'>
        {!isLoading && movies && movies.map(movie => <MovieBox key={movie.id} movie={movie} />)}
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
