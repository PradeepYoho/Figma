import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="px-3 pt-6 sm:px-4 sm:pt-8 md:px-5 md:pt-10 ">
      <div
        className="px-3 sm:px-4 md:px-5 flex flex-wrap md:flex-nowrap items-center justify-between md:justify-center h-auto md:h-[90px] rounded-full"
        style={{
          backgroundColor: "#C8F6FF80",
        }}
      >
        
        <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center mb-2 md:mb-0">
          <img src="images/logo.png" alt="Logo" className="w-full h-full object-cover" />
        </Link>

      
       <div className="hidden md:flex items-center justify-center space-x-4 flex-1">
          <Link to="/home" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group1.png" alt="Home" className="w-full h-full object-cover" />
          </Link>
          <Link to="/calendar" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group2.png" alt="Calendar" className="w-6 h-6 object-cover" />
          </Link>
          <Link to="/clock" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group3.png" alt="Clock" className="w-full h-full object-cover" />
          </Link>
          <Link to="/wallet" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group4.png" alt="Wallet" className="w-full h-full object-cover" />
          </Link>
          <Link to="/users" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group5.png" alt="User" className="w-full h-full object-cover" />
          </Link>
          <Link to="/institute" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group6.png" alt="Building" className="w-full h-full object-cover" />
          </Link>
          <Link to="/settings" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/group7.png" alt="Cogs" className="w-6 h-6 object-cover" />
          </Link>
        </div>

        
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 md:mt-0">
          <Link to="/notifications" className="w-10 h-10 rounded-full flex justify-center items-center">
            <img src="images/notify.png" alt="Bell" className="w-full h-full object-cover" />
          </Link>
          <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden">
            <img src="images/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
