import React from 'react';
import Banner from '../../Assets/banner.jpg'
import Gallary from './Gallary';

const Home = () => {
  return (
   <div>
     <div className="relative ">
    <img
      src={Banner}
      className="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div className="relative bg-gray-900 bg-opacity-60">

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40 ">

        <div className="flex flex-col items-center justify-between ">
          <div className="w-full mx-auto max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            A creative photography<br className="hidden md:block" />
              based in Bangladesh
            </h2>
            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
            Photo Master is a Bangladesh based photography.If you need a well photograper then your choose my services
            </p>          
          </div>
        </div>
      </div>

    </div>
  </div>
    
     <div>
      <Gallary/>
     </div>

   </div>
  );
};

export default Home;