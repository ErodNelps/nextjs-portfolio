import Link from 'next/link';
import * as React from 'react';
const PageNotFound = () => {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center dark:bg-blackSecondary bg-whitePrimary font-[BaiJamjuree]'>
      <h1 className='text-9xl font-extrabold text-black dark:text-white tracking-widest'>
        404
      </h1>
      <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-2 py-1 text-black dark:text-white text-sm rounded rotate-12 absolute'>
        Page Not Found
      </div>
      <button
        className='rounded-3xl font-semibold mt-5 px-6 py-3 text-black dark:text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] transition duration-300'
        type='button'
      >
        <Link href='/'>Back to Home</Link>
      </button>
    </main>
  );
};

export default PageNotFound;
