import React from 'react';

const PersonalInfoForm: React.FC = () => {
  return (
    <form className="space-y-8">
      {/* Institute Details */}
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 mb-4 shadow">
        <h3 className="text-md font-semibold mb-4 text-gray-800">Enter Your Institute Details Here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Institute Name</label>
            <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Registered Date</label>
            <input type="date" className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
      </div>
      {/* Address Information */}
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow">
        <h3 className="text-md font-semibold mb-4 text-gray-800">Enter Your Address Information Here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Address Line 1</label>
            <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm mb-1">Address Line 2</label>
            <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
