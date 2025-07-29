import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="p-6">
      <div className="rounded-lg overflow-hidden">
        <div className="relative  h-[90px] flex items-center gap-4 px-4 py-[19px] rounded-t-[12px] bg-[#003E6B]">
          <div className="w-6 h-6 flex justify-center items-center">
            <IoIosArrowBack  className="w-6 h-6 text-white"/>

          </div>

          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex justify-center items-center">
            <img src="/images/barathiLogo.png" alt="University Logo" className="w-8 h-8 object-contain" />
          </div>

          <h1 className="text-xl font-semibold text-white">Bharathidasan University</h1>
        </div>

        <img
          src="/images/barathidasanBanner.png"
          alt="University Banner"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="mt-4">
       <div className="flex gap-4 mt-2">
 
       <button className="flex items-center gap-[10px] w-[161px] h-[48px] px-4 py-[14px] rounded-[12px] bg-[#003E6B] text-white hover:bg-[#002a4c] transition">
       <img src="/images/Book-check.png" alt="Profile" className="w-[16px] h-[17.5px]" />
    <FaUser className="w-[16px] h-[17.5px]" />
    <span className="text-base font-semibold">About</span>
  </button>


  <button className="flex items-center gap-[10px] w-[161px] h-[48px] px-4 py-[14px] border border-[#003E6B] rounded-[12px] text-[#003E6B] bg-transparent hover:bg-[#003E6B] hover:text-white transition">
    <img src="/images/Book-check.png" alt="Profile" className="w-[16px] h-[17.5px]" />
    <span className="text-base font-semibold">Profile</span>
  </button>


  <button className="flex items-center gap-[10px] w-[161px] h-[48px] px-4 py-[14px] border border-[#003E6B] rounded-[12px] text-[#003E6B] bg-transparent hover:bg-[#003E6B] hover:text-white transition">
    <img src="/images/Contacts.png" alt="Courses" className="w-[16px] h-[17.5px]" />
    <span className="text-base font-semibold">Courses</span>
  </button>
</div>

      </div>

     
      <div className="p-6 mt-6 flex items-start gap-10 w-full max-w-[705px] h-[262px] bg-[#E5FBFF03] backdrop-blur-[152px] shadow-[inset_0_4px_122px_#ffffff80] rounded-[12px] border border-white/20">
  <div className="text-center">
    <img
      src="/images/aboutLogo.png"
      alt="Logo"
      className="w-[185px] h-[158px]  mx-auto"
    />
    <p className="text-lg font-semibold text-[#0E2B56] mt-1">Bharathidasan University</p>
    <p className="text-[#0E2B56] text-sm">aureg@bdu.ac.in</p>
  </div>
  <div className="flex flex-col justify-start text-[#0E2B56] text-sm space-y-2">
    <h2 className="text-xl font-semibold">Contact Details:</h2>
    <div className="flex items-center gap-2">
      <img src="/images/location.png" alt="location" className="w-5 h-5" />
      <p>Palkalaiperur, Tiruchirappalli, 620024, Tamil Nadu</p>
    </div>
    <div className="flex items-center gap-2">
       <img src="/images/email.png" alt="email" className="w-5 h-5" />
      <p>aureg@bdu.ac.in</p>
    </div>
    <div className="flex items-center gap-2">
     <img src="/images/Call.png" alt="phone" className="w-5 h-5" />
      <p>914312407092</p>
    </div>
  </div>
</div>

      <div className="mt-6 text-justify text-sm text-gray-800">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">About Us</h3>
        <p>
          Bharathidasan University established in February 1982, and was named after the great revolutionary Tamil Poet,
          Bharathidasan (1891–1964). The motto of the University “We will create a brave new world” has been framed from
          Bharathidasan's poetic words. The University endeavours to be true to such a vision by creating in the region
          a brave new world of academic innovation for social change.
        </p>
      </div>
    </div>
  );
};

export default About;
