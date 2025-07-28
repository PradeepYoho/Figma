import React, { useState } from "react";
import Dashboardcard from "./Dasboardcard";
import filter from "../assets/filter.png";
import path1 from "../assets/Path (1).png";
import twelve from "../assets/12k.png";

const Dashboard: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  return (
    <div className="px-4 md:px-6">
    
      <div className="flex justify-between items-center mb-3">
        <button
          className="bg-white text-[#0E2B56] py-3 px-4 rounded-lg flex items-center space-x-2"
          onClick={toggleFilter}
        >
          <img src={filter} alt="description" className="w-6 h-6" />
          <span>{isFilterVisible ? "Hide Filter" : "Show Filter"}</span>
        </button>
      </div>

    
      {isFilterVisible && (
        <div className="mb-6">
          <p className="text-[24px] font-montserrat font-semibold text-[#0E2B56] mb-6">
            Filters
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
           
            <div className="flex flex-col bg-[#C8F6FF80] rounded-[16px] p-4 w-full max-w-[620px]">
              <label className="text-lg font-semibold text-[#0E2B56] mb-2">
                Month
              </label>
              <select className="w-full h-12 rounded-[12px] border border-[#4771AE] px-4">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
              </select>
            </div>

         
            <div className="flex flex-col bg-[#C8F6FF80] rounded-[16px] p-4 w-full max-w-[620px]">
              <label className="text-lg font-semibold text-[#0E2B56] mb-2">
                Year
              </label>
              <select className="w-full h-12 rounded-[12px] border border-[#4771AE] px-4">
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
            </div>
          </div>
        </div>
      )}

    
      <div className="pb-2">
        <Dashboardcard />
      </div>

  
      <div className="mb-7 ml-2">
        <p className="text-[22px] font-semibold text-[#0E2B56] font-montserrat">
          Graphs & Trends
        </p>
      </div>

      
     <div className="flex flex-wrap justify-between gap-6 mb-5">
 
  <div className="w-full md:w-[48%] bg-[rgba(200,246,255,0.5)] p-6 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold text-[#0E2B56] mb-4">
      Revenue Trends (Monthly)
    </h3>
    <div className="relative w-full h-[260px]">
      <img
        src={path1}
        alt="Graph"
        className="w-full h-full object-contain"
      />
      <img
        src={twelve}
        alt="Tooltip"
        className="absolute w-[70px] h-[65px] top-[-30px] left-[60%] transform -translate-x-1/2"
      />
    </div>
  </div>


  <div className="w-full md:w-[48%] bg-[rgba(200,246,255,0.5)] p-6 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold text-[#0E2B56] mb-2">
      Subscription Details
    </h3>
   
  </div>
</div>

    </div>
  );
};

export default Dashboard;
