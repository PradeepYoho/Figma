// src/components/Dashboard.tsx

import React from "react";

const universities = [
  {
    name: "Bharathidasan University",
    address: "National Highway 336",
    image: "/src/assets/bharathi.png",
    plan: "Plan",
    width: "62px",
    height: "62px",
  },
  {
    name: "Anna University Ro Tirunel...",
    address: "No 3, Salman Complex",
    image: "/src/assets/anna.png",
    plan: "Plan",
  },
  {
    name: "Remo International Co...",
    address: "10 GST Road, St, Thomas Roa",
    image: "/src/assets/remo.png",
    plan: "Basic Plan - Free Plan",
  },
  {
    name: "First Fly Aviation Acas..",
    address: "3rd floor tower no",
    image: "/src/assets/fly.png",
    plan: "Premium plan",
  },
];

const   University: React.FC = () => (
  <div className="grid grid-cols-3 gap-6 p-6">
    {universities.map((uni, idx) => (
      <div
        key={idx}
        className="bg-white/70 rounded-xl shadow-md flex flex-col items-center p-4"
      >
        <img
          src={uni.image}
          alt={uni.name}
          className="w-24 h-24 object-cover rounded-lg mb-4"
        />
        <div className="w-full text-center">
          <h3 className="font-semibold text-lg truncate">{uni.name}</h3>
          <p className="text-gray-600 text-sm "> 
            <img src="/src/assets/location.png" alt="/location" />
            {uni.address}</p>
          <p className="text-gray-500 text-xs mt-1">{uni.plan}</p>
          <div className="text-right">
          <button className="mt-3 bg-green-600 text-white  px-6 py-1 rounded-md hover:bg-green-700 transition">
            View
          </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default University;