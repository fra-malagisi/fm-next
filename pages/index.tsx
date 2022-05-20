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
      <a href='#Intent;scheme=https;package=com.google.android.gm;action=android.intent.action.MAIN;end'>
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
