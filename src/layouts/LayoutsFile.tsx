import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

import bgimage2 from '../assets/bgimage2.png';
import blurbg from '../assets/blur-bg.png';

const LayoutsFile: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage2})` }}
    >
      <div className="p-5">
        <div
          className="bg-cover bg-fixed bg-center rounded-lg border border-gray-300 max-w-[1320px] mx-auto p-4 pb-4"
          style={{ backgroundImage: `url(${blurbg})` }}
        >
          <div className="fixed top-0 left-6 w-[96%] z-40 px-3 pt-6 sm:px-4 sm:pt-8 md:px-5 md:pt-10">
            <Navbar />
          </div>

          <div className="mt-[80px] p-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutsFile;
