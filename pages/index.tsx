import { NextPage } from 'next';
import React from 'react';

const Home: NextPage<unknown> = () => {
  return (
    <>
      <a href='googlegmail://'>GMAIL</a>
      <br />
      <a href='ms-outlook://'>OUTLOOK</a>
    </>
  );
};

export default Home;
