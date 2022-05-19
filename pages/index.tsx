import { NextPage } from 'next';
import React from 'react';

const Home: NextPage<unknown> = () => {
  window.location.replace('instagram://');

  return (
    <>
      <div className='mb-4 flex justify-center'>prova</div>
    </>
  );
};

export default Home;
