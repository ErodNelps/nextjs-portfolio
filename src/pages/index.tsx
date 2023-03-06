import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Tilt from './components/Tilt';
import { useRouter } from 'next/router';
import Banner from './components/Banner';
import Header from './components/Header/Header';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const handleMoreAboutButton = () => {
    router.push('/about');
  };
  const handleContactMeButton = () => {
    router.push('/contact');
  };
  return (
    <>
      <Header />
      <main
        className={
          'flex flex-col flex-1 h-full items-center bg-whitePrimary dark:bg-blackSecondary dark:text-white font-[BaiJamjuree]'
        }
      >
        <Navbar></Navbar>
        <div className='flex flex-row max-md:flex-col-reverse flex-1 max-w-[1024px] justify-between items-center my-24 xl:px-0 md:px-4 md:flex-row px-2'>
          <div>
            <div className='text-5xl font-extrabold leading-[64px] animate-slideDownAnim'>
              <p className='gradient-text'>Hello, I&apos;m Minh Thuong,</p>
              junior web developer based in HoChiMinh City, VietNam.
            </div>
            <p className='text-xl pt-4 leading-7 animate-slideDownAnim'>
              An aspiring junior web developer in VietNam. I specilize in
              developing responsive websites for mobile and desktop.
            </p>
            <div className='pt-4 animate-hideAnim'>
              <button
                className='rounded-3xl font-semibold px-6 py-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] transition duration-300'
                onClick={handleMoreAboutButton}
                type='button'
              >
                MORE ABOUT ME
              </button>
              <button
                className='rounded-3xl font-semibold bg-red-500 px-6 py-3 ml-4 border border-black dark:border-whitePrimary bg-transparent hover:bg-purple-600 hover:border-purple-600 dark:hover:bg-green-300 dark:hover:border-green-300 hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] transition duration-300'
                type='button'
                onClick={handleContactMeButton}
              >
                CONTACT ME
              </button>
            </div>
          </div>
          <Tilt className='flex items-center justify-center rounded-md w-[300px] h-min shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] animate-slideDownAnim'>
            <Image
              className='rounded-md '
              src='/my-photo.jpg'
              alt='13'
              width={200}
              height={100}
              priority
            />
          </Tilt>
        </div>
        <Banner />
        <div className='w-full max-w-[1024px] my-24 xl:px-0 md:px-4 md:flex-row px-2'>
          <h2 className='font-bold text-3xl gradient-text'>My Tech Stack</h2>
          <div className='flex flex-row justify-between max-lg:grid grid-cols-3 gap-y-4 max-md:grid-cols-2 my-10 lg:px-10'>
            <div className='flex flex-col align-middle text-center items-center font-bold text-xl text-blue-500'>
              <Image
                className='rounded-md'
                src='/html-logo.svg'
                alt='html'
                width={80}
                height={80}
                priority
              />
              HTML
            </div>
            <div className='flex flex-col align-middle text-center items-center font-bold text-xl text-blue-500'>
              <Image
                className='rounded-md'
                src='/css-logo.svg'
                alt='css'
                width={80}
                height={80}
                priority
              />
              CSS
            </div>
            <div className='flex flex-col align-middle text-center items-center font-bold text-xl text-blue-500'>
              <Image
                className='rounded-md flex-1'
                src='/reactjs-logo.png'
                alt='react'
                width={80}
                height={80}
                priority
              />
              REACTJS
            </div>
            <div className='flex flex-col align-middle text-center items-center font-bold text-xl text-blue-500'>
              <Image
                className='rounded-md'
                src='/nodejs-logo.svg'
                alt='node'
                width={80}
                height={80}
                priority
              />
              NODE
            </div>
            <div className='flex flex-col align-middle text-center items-center font-bold text-xl text-blue-500'>
              <Image
                className='rounded-md'
                src='/database-logo.png'
                alt='react'
                width={80}
                height={80}
                priority
              />
              Database
            </div>
          </div>
        </div>

        <div className='max-w-[1024px] mb-10 xl:px-0 md:px-4 md:flex-row px-2'>
          <h2 className='font-bold text-3xl gradient-text'>
            Projects I&apos;ve worked on
          </h2>
          <div className='flex bg-white dark:bg-[#22221c] mt-10 rounded-lg'>
            <div className='flex-1 px-4 py-4'>
              <div className='bg-blackSecondary w-full h-full min-h-[180px] max-h-[250px]'>
                <Image
                  className='!relative object-cover h-[unset]'
                  src='/yt_1200.png'
                  alt='ytClone'
                  fill
                />
              </div>
            </div>
            <div className='flex-1 flex flex-col px-4 py-4'>
              <div className='flex'>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  ReactJS
                </button>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  Node
                </button>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  API
                </button>
              </div>
              <div className='text-lg font-bold mt-2'>
                A clone website of YouTube with basic functions such as
                watching/interacting with videos, searching, using the public
                YouTube Data API.
              </div>
              <p className='text-gray-500 mt-1'>Fresher Project</p>
            </div>
          </div>
          <div className='flex bg-white dark:bg-[#22221c] mt-4 rounded-lg'>
            <div className='flex-1 px-4 py-4'>
              <div className='bg-blackSecondary w-full h-full rounded-lg min-h-[180px] max-h-[250px]'>
                <Image
                  className='!relative object-cover h-[unset]'
                  src='/home-fixing.jpg'
                  alt='home-fixing'
                  fill
                />
              </div>
            </div>
            <div className='flex-1 flex flex-col px-4 py-4'>
              <div className='flex'>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  ReactJS
                </button>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  Service
                </button>
              </div>
              <div className='text-lg font-bold mt-2'>
                A service booking website that lets users search for available
                services based on location and time slots, create bookings, keep
                track of jobs’ progress and make online payments.
              </div>
              <p className='text-gray-500 mt-1'>Company Project</p>
            </div>
          </div>
          <div className='flex bg-white dark:bg-[#22221c] mt-4 rounded-lg'>
            <div className='flex-1 px-4 py-4'>
              <div className='bg-blackSecondary w-full h-full rounded-lg min-h-[180px]'>
                <div className='bg-blackSecondary w-full h-full rounded-lg min-h-[180px] max-h-[250px]'>
                  <Image
                    className='!relative object-cover h-[unset]'
                    src='/websdk.jpg'
                    alt='websdk'
                    fill
                  />
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col px-4 py-4'>
              <div className='flex'>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  ReactJS
                </button>
                <button className='rounded-xl bg-white px-3 py-1 text-black mr-2 font-semibold'>
                  SDK
                </button>
              </div>
              <div className='text-lg font-bold mt-2'>
                A Web SDK that provides reusable and responsive UI components
                for other ReactJS/NextJS projects.
              </div>
              <p className='text-gray-500 mt-1'>Company Project</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
