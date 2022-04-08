import { NextPage } from 'next';
import { FC } from 'react';

import dbConnect from '../lib/dbConnect';
import MovieSchema, { Movie } from '../models/movie';

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result: Movie[] = await MovieSchema.find({}).limit(10);
  return { props: { movies: JSON.parse(JSON.stringify(result)) } };
}
