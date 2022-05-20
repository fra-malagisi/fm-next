import { NextPage } from 'next';
import React from 'react';

const Home: NextPage<unknown> = () => {
  return (
    <>
      <a href='googlegmail://'>GMAIL</a>
      <br />
      <a href='ms-outlook://'>OUTLOOK</a>
      <br />
      <a href='message://'>MAIL</a>
      <br />
      <a href='intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end'>ANDROID</a>
    </>
  );
};

export default Home;
