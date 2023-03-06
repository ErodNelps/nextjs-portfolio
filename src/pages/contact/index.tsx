import Navbar from '../components/Navbar';
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import Header from '../components/Header/Header';
const About = () => {
  const contactForm = React.useRef<HTMLFormElement>(null);
  const [formLoading, setFormLoading] = React.useState(false);
  const handleSubmitContactForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        contactForm.current || '',
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text == 'OK') {
          }
          setFormLoading(false);
        },
        (error) => {
          console.log(error.text);
          setFormLoading(false);
        }
      );
  };
  return (
    <>
      <Header />
      <main className='flex flex-col flex-1 min-h-screen h-max justify-between items-center bg-whitePrimary dark:bg-blackSecondary dark:text-white font-[BaiJamjuree]'>
        <Navbar></Navbar>
        <div className='flex gap-10 max-w-[1024px] justify-between items-center mt-24 mb-20 xl:px-0 md:px-4 md:flex-row flex-col px-2'>
          <div className='flex-1 self-start'>
            <p className='text-6xl font-bold text-transparent leading-[48px] gradient-text animate-slideDownAnim'>
              Get in touch
            </p>
            <p className='mt-10 animate-slideDownAnim'>
              Interested in working with me? Looking for a young and passionate
              developer? Reach out to me through this form and I&apos;ll get
              back to you in the next 48hours. Or contact me directly at office
              hours.
            </p>
            <div className='mt-14 animate-hideAnim'>
              <FontAwesomeIcon
                icon={faEnvelope}
                className='text-2xl fill-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
              />
              <span className='pl-4 text-lg font-semibold'>
                minhthuong906@gmail.com
              </span>
            </div>
            <div className='mt-5 animate-hideAnim'>
              <FontAwesomeIcon
                icon={faPhone}
                className='text-2xl fill-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
              />
              <span className='pl-4 text-lg font-semibold'>
                (+84) 938-619-729
              </span>
            </div>
          </div>
          <form
            ref={contactForm}
            className='flex flex-col flex-1 self-start w-full animate-slideDownAnim'
            onSubmit={handleSubmitContactForm}
          >
            <label htmlFor='name' className='font-semibold'>
              Your name
            </label>
            <input
              type={'text'}
              id='name'
              name='user_name'
              placeholder='Enter your name'
              className='dark:bg-blackInput bg-white mt-3 mb-5 px-4 py-3 rounded-sm focus:outline-none focus:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] dark:focus:shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] transition-shadow'
            ></input>
            <label htmlFor='email' className='font-semibold'>
              Your Email
            </label>
            <input
              type={'text'}
              id='email'
              name='user_email'
              placeholder='Enter your email'
              className='dark:bg-blackInput bg-white mt-3 mb-5 px-4 py-3 rounded-sm focus:outline-none focus:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] dark:focus:shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] transition-shadow'
            ></input>
            <label htmlFor='message' className='font-semibold'>
              Tell me a bit about what you are looking for?
            </label>
            <textarea
              id='message'
              name='message'
              rows={6}
              placeholder='Enter your message'
              className='dark:bg-blackInput bg-white mt-3 mb-5 px-4 py-3 rounded-sm focus:outline-none focus:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] dark:focus:shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] transition-shadow'
            ></textarea>
            <button
              className='rounded-3xl w-56 font-semibold items-center px-6 py-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:shadow-[0_5px_30px_0px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_5px_30px_0px_rgba(255,255,255,0.5)] transition duration-300'
              type='submit'
              disabled={formLoading}
            >
              {formLoading ? (
                <svg
                  className='animate-spin self-center h-6 w-full text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    stroke-width='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              ) : (
                'SEND'
              )}
            </button>
          </form>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default About;
