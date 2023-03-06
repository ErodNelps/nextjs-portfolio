import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const links = [
  { pageName: 'Home', pathname: '' },
  { pageName: 'Projects', pathname: 'projects' },
  { pageName: 'About', pathname: 'about' },
];
const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <nav className='w-full bg-transparent flex flex-col max-w-[1024px] xl:px-0 md:px-4 px-2 pt-2 pb-2 justify-between align-middle'>
      <div className='w-full flex justify-between'>
        <div className='flex align-middle '>
          <h1
            className='font-bold text-lg mr-10 cursor-pointer hover:scale-110 transition duration-300 self-center'
            onClick={() => {
              router.push('/');
            }}
          >
            SPLENDORA.
          </h1>
          <div className='flex gap-10 justify-center align-middle max-sm:hidden'>
            {links.map((link) => {
              return (
                <a
                  key={link.pageName}
                  className='no-underline text-lg self-center hover:text-purple-600 hover:scale-110 transition duration-300 font-medium'
                  href={`/${link.pathname}`}
                >
                  {link.pageName}
                </a>
              );
            })}
          </div>
        </div>
        <div className='flex'>
          <button
            className='relative mr-5 inline-block text-lg underline hover:text-blue-500 duration-300'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label='Toggle Dark Mode'
            type='button'
          >
            {theme === 'light' ? (
              <FontAwesomeIcon className='' icon={faMoon} />
            ) : (
              <FontAwesomeIcon className='' icon={faSun} />
            )}
          </button>
          <button className='group max-sm:hidden r/*  */elative inline-block dark:bg-white bg-black dark:text-black text-white ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 font-bold px-5 py-2 rounded-3xl shadow-md transition-all duration-300'>
            <a key={'contact'} className='no-underline' href={`/contact`}>
              LET&apos;S TALK
            </a>
          </button>
          <div className='relative py-2 sm:max-w-xl sm:hidden w-min'>
            <button
              className='relative group'
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              <div className='relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md'>
                <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
                  <div className='bg-blackSecondary h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10'></div>
                  <div className='bg-blackSecondary h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75'></div>
                  <div className='bg-blackSecondary h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150'></div>

                  <div className='absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12'>
                    <div className='absolute bg-blackSecondary h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45'></div>
                    <div className='absolute bg-blackSecondary h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45'></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {showMobileNav && (
        <div className='flex flex-col px-2 pt-2 pb-3 sm:hidden w-full transition ease-in-out duration-300'>
          {links.map((link) => {
            return (
              <a
                key={link.pageName}
                className='no-underline text-xl self-end mb-3 hover:text-purple-600 hover:scale-110 transition duration-300 font-medium'
                href={`/${link.pathname}`}
              >
                {link.pageName}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
