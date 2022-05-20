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
      <a href='intent://mail.google.com/mail/u/0/?pli=1#inbox/#Intent;scheme=https;package=com.google.android.gm;end'>
        GMAIL ANDROID
      </a>
      <br />
      <a href='intent://https://outlook.live.com/#Intent;scheme=https;package=com.microsoft.office.outlook;end'>
        OUTLOOK ANDROID
      </a>
    </>
  );
};

export default Home;
