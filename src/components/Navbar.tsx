import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';  
import group1 from '../assets/group1.png';
import group2 from '../assets/group2.png';
import group3 from '../assets/group3.png';
import group4 from '../assets/group4.png';
import group5 from '../assets/group5.png';
import group6 from '../assets/group6.png';
import group7 from '../assets/group7.png';
import notify from '../assets/notify.png';
import profile from '../assets/profile.png';

const Navbar: React.FC = () => {
  return (
    <div >
      <div
        className="px-3 sm:px-4 md:px-5 flex flex-wrap md:flex-nowrap items-center justify-between md:justify-center h-auto md:h-[90px] rounded-full"
        style={{
          backgroundColor: "#C8F6FF80",
        }}
      >
      
        <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </Link>

     
        <div className="hidden md:flex items-center justify-center space-x-4 flex-1">
          <Link to="/home" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group1} alt="Home" className="w-full h-full object-cover" />
          </Link>
          <Link to="/calendar" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group2} alt="Calendar" className="w-6 h-6 object-cover" />
          </Link>
          <Link to="/clock" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group3} alt="Clock" className="w-full h-full object-cover" />
          </Link>
          <Link to="/wallet" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group4} alt="Wallet" className="w-full h-full object-cover" />
          </Link>
          <Link to="/users" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group5} alt="User" className="w-full h-full object-cover" />
          </Link>
          <Link to="/institute" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group6} alt="Building" className="w-full h-full object-cover" />
          </Link>
          <Link to="/settings" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={group7} alt="Cogs" className="w-6 h-6 object-cover" />
          </Link>
        </div>

  
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 md:mt-0">
          <Link to="/notifications" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src={notify} alt="Bell" className="w-full h-full object-cover" />
          </Link>
          <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden">
            <img src={profile} alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
