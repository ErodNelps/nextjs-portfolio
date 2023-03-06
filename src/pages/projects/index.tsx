import Navbar from '../components/Navbar';
import * as React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
const projectsList = [
  { id: 'HomeService', name: 'Home fixing service' },
  { id: 'WebSDK', name: 'Web SDK' },
  { id: 'YTClone', name: 'Youtube Clone' },
  { id: 'Nubes3', name: 'Nubes3 - Cloud Storage' },
];
const Projects = () => {
  const [currentProject, setCurrentProject] = React.useState('HomeService');
  const handleSelectProject = (project: string) => {
    setCurrentProject(project);
  };
  return (
    <>
      <Header />
      <main
        className={
          'flex flex-col flex-1 min-h-screen h-max justify-between items-center bg-whitePrimary dark:bg-blackSecondary dark:text-white font-[BaiJamjuree]'
        }
      >
        <Navbar />
        <div className='flex flex-col max-w-[1024px] h-screen mt-24 flex-1 w-full xl:px-0 md:px-4 px-2'>
          <div  className='flex-1 w-full item-start mb-24'>
            <h2 className='text-6xl font-bold text-transparent leading-[48px] gradient-text animate-slideDownAnim'>
              Projects
            </h2>
            <div className='relative flex max-sm:flex-col gap-10 flex-1 justify-between mt-5'>
              <div className='min-w-[300px] before:absolute before:-top-1 before:-left-1 before:w-[90px] before:h-[90px] before:rounded-tl-lg before:content-[" "] before:bg-gradient-to-r before:from-green-300 before:via-blue-500 before:to-purple-600'>
                <ul className='relative z-1 w-max bg-whitePrimary dark:bg-blackSecondary rounded-tl-md pt-8 pl-8'>
                  {projectsList.map((project) => {
                    return (
                      <li
                        key={project.id}
                        className='text-lg w-max mb-4 cursor-pointer bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-l translate-x-0 origin-left transition-all duration-200 hover:tracking-wide animate-slideDownAnim'
                        onClick={() => handleSelectProject(project.id)}
                      >
                        <div className='w-full h-full bg-whitePrimary dark:bg-blackSecondary'>
                          {project.name}
                          <div className='w-full h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className=' flex-1 flex justify-end items-start text-right '>
                {{
                  HomeService: (
                    <div
                      key='homeservice'
                      className='dark:bg-blackSecondary bg-whitePrimary h-full pr-5 animate-hideAnim'
                    >
                      <p className='text-xl'>Home Fixing Service</p>
                      <div className='dark:bg-blackSecondary h-full'>
                        <p className='dark:bg-blackSecondary mt-3'>
                          A service booking website that lets users search for
                          available services based on location and time slots,
                          create bookings, keep track of jobs’ progress and make
                          online payments.
                        </p>
                        <p className='dark:bg-blackSecondary mt-3'>
                          <strong>Key responsibilities: </strong>
                          created page layouts and common UI components, and
                          later maintained the website post production.
                        </p>
                      </div>
                    </div>
                  ),
                  WebSDK: (
                    <div
                      key='websdk'
                      className='dark:bg-blackSecondary h-full pr-5 animate-hideAnim'
                    >
                      <p className='text-xl'>Web SDK</p>
                      <div className='dark:bg-blackSecondary h-full pl-5'>
                        <p className='dark:bg-blackSecondary mt-3'>
                          A Web SDK that provides reusable and responsive UI
                          components for other ReactJS/NextJS projects.
                        </p>
                        <p className='dark:bg-blackSecondary mt-3'>
                          <strong>Key responsibilities: </strong>created common
                          UI components, implemented API services, and later
                          maintained my components post project integration.
                        </p>
                      </div>
                    </div>
                  ),
                  YTClone: (
                    <div
                      key='ytclone'
                      className='dark:bg-blackSecondary h-full pr-5 animate-hideAnim'
                    >
                      <p className='text-xl '>Youtube Clone</p>
                      <div className='dark:bg-blackSecondary h-full'>
                        <p className='dark:bg-blackSecondary mt-3'>
                          A clone website of YouTube with basic functions such
                          as watching/interacting with videos, searching, using
                          the public YouTube Data API.
                        </p>
                        <p className='dark:bg-blackSecondary mt-3'>
                          <strong>Key responsibilities: </strong>
                          Team lead, created tasks for team members, create
                          pages and implemented services interacting with
                          Youtube API
                        </p>
                      </div>
                    </div>
                  ),
                  Nubes3: (
                    <div
                      key='nubes3'
                      className='dark:bg-blackSecondary h-full pr-4 animate-hideAnim'
                    >
                      <p className='text-xl'>Nubes3 - Cloud Storage</p>
                      <div className='dark:bg-blackSecondary'>
                        <p className='dark:bg-blackSecondary mt-3'>
                          A basic cloud storage system with scaling capability.
                          Developed frontend with ReactJS and backend with
                          Golang
                        </p>
                        <p className='dark:bg-blackSecondary mt-3'>
                          <strong>Key responsibilities: </strong>
                          Frontend lead, created tasks for team members, created
                          pages and implemented API services.
                        </p>
                      </div>
                    </div>
                  ),
                }[currentProject] || (
                  <div className='dark:bg-blackSecondary h-full pr-4 animate-hideAnim'>
                    Select a Project
                  </div>
                )}
                <div className='h-full w-1 bg-gradient-to-b from-green-300 via-blue-500 to-purple-600'></div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Projects;
