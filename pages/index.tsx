import { NextPage } from 'next';
import React from 'react';

const Home: NextPage<unknown> = () => {
  return (
    <>
      <a href='googlegmail://'>GMAIL IOS</a>
      <br />
      <a href='ms-outlook://'>OUTLOOK IOS</a>
      <br />
      <a href='message://'>MAIL IOS</a>
      <br />
      <a href='intent://mail.google.com/#Intent;scheme=https;package=com.google.android.gm;end'>
        GMAIL ANDROID
      </a>
    </>
  );
};

export default Home;
