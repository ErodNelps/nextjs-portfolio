import Head from 'next/head';
import * as React from 'react';
const Header = () => {
  return (
    <Head>
      <title>My Projects | Splendora Portfolio</title>
      <meta
        name='description'
        content='Frontend Developer Portfolio with NextJS'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Header;
