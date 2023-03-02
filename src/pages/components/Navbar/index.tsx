import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

const links = [
  { pageName: 'Home', pathname: '' },
  { pageName: 'Projects', pathname: 'projects' },
  { pageName: 'About', pathname: 'about' },
];
const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <nav className='w-full bg-transparent flex max-w-[1024px] pt-5 pb-2 justify-between align-middle'>
      <div className='flex align-middle '>
        <h1
          className='font-bold text-lg mr-10 cursor-pointer hover:scale-110 transition duration-300'
          onClick={() => {
            router.push('/');
          }}
        >
          SPLENDORA.
        </h1>
        <div className='flex gap-10 justify-center align-middle'>
          {links.map((link) => {
            return (
              <a
                key={link.pageName}
                className='no-underline hover:text-purple-600 hover:scale-110 transition duration-300 font-medium'
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
          className='relative mr-5 inline-block  underline hover:text-blue-500 duration-300'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label='Toggle Dark Mode'
        >
          {theme === 'light' ? (
            <FontAwesomeIcon className='' icon={faMoon} />
          ) : (
            <FontAwesomeIcon className='' icon={faSun} />
          )}
        </button>
        <button className='group relative inline-block dark:bg-white bg-black dark:text-black text-white hover:bg-green-300 font-bold px-5 py-2 rounded-3xl hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] transition duration-300'>
          <a key={'contact'} className='no-underline' href={`/contact`}>
            LET&apos;S TALK
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
