import React from 'react';
import LargeNav from '../../components/Header/LargeNav';
import MobileNav from '../../components/Header/MobileNav';
import Feed from '../Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import Main from '../Profile/Main';
const Home = () => {
  return (
    <>
        <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
      {/* Sidebar section */}
      <div className='lg:w-[16%] md:w-[17%] h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0.5 lg:block md:block sm:hidden hidden'>
        <LargeNav />
      </div>

      {/* Bottom navbar small screen*/}
      <div className='w-full h-auto py-1 px-3 border-t border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50 '>
        <MobileNav/>
      </div>
      {/* Feed and profile routing section */}
      <Routes>
      <Route path="/" element={<Feed />} />
      {/* Profile section */}
      <Route path="/profile" element={<Main />} />
      </Routes>
    </div>
    </>
  );
};

export default Home;
