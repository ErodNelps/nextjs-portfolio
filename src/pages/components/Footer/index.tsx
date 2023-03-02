import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
const links = [
  { pageName: 'Home', pathname: '' },
  { pageName: 'About', pathname: 'about' },
  { pageName: 'Contact', pathname: 'contact' },
];
const Footer = () => {
  return (
    <footer className='relative w-full max-w-[1024px] bg-blueGray-200 pb-6'>
      <div className='container'>
        <hr className='my-6 border-blueGray-300' />
        <div className='flex flex-wrap text-left lg:text-left'>
          <div className='w-full flex justify-between'>
            <h4 className='text-3xl fonat-semibold text-blueGray-700'>
              Let&apos;s keep in touch!
            </h4>
            <div className='flex self-end'>
              <div className='flex gap-10 justify-center align-middle'>
                {links.map((link) => {
                  return (
                    <a
                      key={link.pageName}
                      className='no-underline text-black dark:text-whitePrimary hover:scale-110 transition duration-300 font-medium'
                      href={`/${link.pathname}`}
                    >
                      {link.pageName}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='flex flex-1 justify-between items-top mb-6 items-center mt-7'>
            <div className='text-sm text-blueGray-500 font-semibold py-1'>
              © Designed by Kartik Bansal
            </div>
            <div className='flex gap-3'>
              <div className='p-[1px] rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                <button className='w-[40px] h-[40px] rounded-full dark:bg-blackSecondary bg-whitePrimary'>
                  <a
                    className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                    href='https://www.linkedin.com/in/th%C6%B0%C6%A1ng-minh-866714204/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className='text-lg' />
                  </a>
                </button>
              </div>
              <div className='p-[1px] rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                <button className='w-[40px] h-[40px] rounded-full dark:bg-blackSecondary bg-whitePrimary'>
                  <a
                    className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                    href='https://www.facebook.com/DoRaAquaRis/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faFacebookF} className='text-lg' />
                  </a>
                </button>
              </div>
              <div className='p-[1px] rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                <button className='w-[40px] h-[40px] rounded-full dark:bg-blackSecondary bg-whitePrimary'>
                  <a
                    className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
                    href='https://github.com/ErodNelps'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} className='text-lg' />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
