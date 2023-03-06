import Navbar from '../components/Navbar';
import * as React from 'react';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Header from '../components/Header/Header';

const About = () => {
  return (
    <>
      <Header />
      <main className='flex flex-col flex-1 h-full items-center bg-whitePrimary dark:bg-blackSecondary text-black dark:text-white font-[BaiJamjuree]'>
        <Navbar></Navbar>
        <div className='w-full flex flex-row max-md:flex-col flex-1 max-w-[1024px] justify-between items-center mt-24 mb-12 xl:px-0 md:px-4 md:flex-row px-2'>
          <div className='text-5xl font-extrabold flex-1 self-start animate-slideDownAnim'>
            <p className='leading-[56px]'>Hi again,</p>
            <p className='text-transparent leading-[56px] bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
              I&apos;m Phung Tran Minh Thuong
            </p>
          </div>
          <div className='flex flex-col flex-1 items-center'>
            <p className='animate-slideDownAnim'>
              A junior developer, a reliable and pleasant-to-work-with teammate
              who&apos;s seeking to work in professional environments.
            </p>
            <p className='mt-2 animate-slideDownAnim'>
              Over my time working I have successfully deliver several small to
              medium projects, from various customers inside and outside
              VietNam.
            </p>
            <button
              className='rounded-3xl font-semibold px-6 py-3 mt-4 w-72 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] transition duration-300 animate-slideDownAnim'
              type='button'
            >
              <a
                href='/FrontENd_PTMT_CV.docx'
                download='FrontEnd_Phung_Tran_Minh_Thuong_CV'
              >
                DOWNLOAD MY CV
              </a>
            </button>
          </div>
        </div>
        <div className='flex gap-10 mt-4'>
          <button className='w-[40px] h-[40px] text-xl rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:scale-110 transition duration-200 animate-slideDownAnim'>
            <a
              className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
              href='https://www.linkedin.com/in/th%C6%B0%C6%A1ng-minh-866714204/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </button>
          <button className='w-[40px] h-[40px] text-lg rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:scale-110 transition duration-200 animate-slideDownAnim'>
            <a
              className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
              href='https://www.facebook.com/DoRaAquaRis/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </button>
          <button className='w-[40px] h-[40px] text-lg items-center rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:scale-110 transition duration-200 animate-slideDownAnim'>
            <a
              className='text-blueGray-600 hover:text-blueGray-800 font-semibold block text-sm'
              href='https://github.com/ErodNelps'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </button>
        </div>
        <div className='w-full min-h-[300px] relative max-md:flex-col flex-1 grid grid-cols-3 grid-rows-[repeat(2,_minmax(0,_300px))] gap-4 grid-flow-row max-w-[1024px] my-24 xl:px-0 md:px-4 px-2'>
          <div className='h-full row-start-1 row-end-3'>
            <Image
              className='!relative object-cover h-[unset] animate-slideDownAnim'
              src='/pexels-grid-1.jpg'
              alt='pexels-2'
              fill
            />
          </div>
          <div className='h-full row-start-1 row-end-3'>
            <Image
              className='!relative object-cover row-start-1 row-end-3 h-[unset] animate-slideDownAnim'
              src='/pexels-grid-2.jpg'
              alt='pexels-1'
              fill
            />
          </div>
          <div>
            <Image
              className='!relative object-cover h-[unset] animate-slideDownAnim'
              src='/pexels-grid-3.jpg'
              alt='pexels-3'
              fill
            />
          </div>
          <div>
            <Image
              className='object-cover !relative h-[unset] animate-slideDownAnim'
              src='/pexels-grid-4.jpg'
              alt='pexels-4'
              fill
            />
          </div>
        </div>
        <div className='w-full md:grid md:grid-cols-2 flex flex-col gap-20 max-md:flex-col flex-1 max-w-[1024px] justify-between items-start my-24 xl:px-0 md:px-4 px-2'>
          <div className='flex flex-col flex-1 w-full justify-between animate-slideDownAnim'>
            <h3 className='gradient-text font-bold text-4xl'>Education</h3>
            <div className='flex flex-col mt-10'>
              <div className='flex justify-between pr-10 pb-6'>
                <div>
                  <p className='uppercase text-lg font-semibold'>
                    University of Science - VNUHCM
                  </p>
                  <p className='text-md text-gray-500 mt-1'>
                    Software Engineering Degree
                  </p>
                </div>
                <p className='text-md text-gray-500 self-end text-right'>
                  2017-2022
                </p>
              </div>
              <hr className='text-gray-500'></hr>
            </div>
          </div>
          <div className='flex flex-col flex-1 max-md:mt-10 w-full justify-between h-full animate-slideDownAnim'>
            <h3 className='gradient-text font-bold text-4xl'>
              Work Experience
            </h3>
            <div className='flex flex-col mt-10'>
              <div className='flex justify-between pr-10 pb-6'>
                <div>
                  <p className='uppercase text-lg font-semibold'>
                    FPT Software
                  </p>
                  <p className='text-md text-gray-500 mt-1'>
                    Frontend ReactJS Developer
                  </p>
                </div>
                <p className='text-md text-gray-500 self-end text-right'>
                  2021-2022
                </p>
              </div>
              <hr className='text-gray-500'></hr>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;
