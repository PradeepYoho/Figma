import React from 'react';

const institutes = [
  {
    name: 'Bharathidasan University',
    address: 'National Highway 336',
    plan: '',
    branches: true,
    image: 'https://via.placeholder.com/48',
  },
  {
    name: 'Anna University Ro Tirunel...',
    address: 'No 3, Salman Complex',
    plan: '',
    branches: true,
    image: 'https://via.placeholder.com/48',
  },
  {
    name: 'Remo International Co....',
    address: '10 GST Road, St, Thomas Roa',
    plan: 'Basic Plan - Free Plan',
    branches: true,
    image: 'https://via.placeholder.com/48',
  },
  {
    name: 'First Fly Aviation Acas..',
    address: '',
    plan: '',
    branches: false,
    image: 'https://via.placeholder.com/48',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-3xl" style={{background: 'linear-gradient(120deg, #b6c6e6 0%, #e0e7ef 100%)'}}>
      <div className="w-full max-w-6xl rounded-3xl p-6 md:p-10 shadow-2xl bg-white/30 backdrop-blur-lg border border-white/40">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 shadow"><span className="material-icons">radio_button_checked</span></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 shadow"><span className="material-icons">grid_view</span></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 shadow"><span className="material-icons">event_note</span></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 shadow"><span className="material-icons">person</span></button>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/60 shadow"><span className="material-icons">notifications</span></button>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            <button className="bg-blue-900 text-white px-5 py-2 rounded-lg font-semibold ml-2">+ Add Institute</button>
          </div>
        </div>
        {/* Filter Section */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button className="bg-white/60 px-4 py-2 rounded-lg shadow border border-white/40 font-medium">Hide Filter</button>
          <div className="flex-1 flex flex-wrap gap-4">
            <select className="bg-white/60 px-4 py-2 rounded-lg shadow border border-white/40 min-w-[180px]">
              <option>Subscription Plan</option>
            </select>
            <select className="bg-white/60 px-4 py-2 rounded-lg shadow border border-white/40 min-w-[180px]">
              <option>Status</option>
            </select>
            <select className="bg-white/60 px-4 py-2 rounded-lg shadow border border-white/40 min-w-[180px]">
              <option>Date</option>
            </select>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/60 rounded-xl p-4 flex flex-col items-start shadow border border-white/40 min-w-[150px]">
            <div className="flex items-center gap-2 mb-2"><span className="material-icons">apartment</span> <span className="font-semibold">Total Institute</span></div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 flex flex-col items-start shadow border border-white/40 min-w-[150px]">
            <div className="flex items-center gap-2 mb-2"><span className="material-icons">check_circle</span> <span className="font-semibold">Active Institute</span></div>
            <div className="text-2xl font-bold">0</div>
          </div>
          <div className="bg-white/60 rounded-xl p-4 flex flex-col items-start shadow border border-white/40 min-w-[150px]">
            <div className="flex items-center gap-2 mb-2"><span className="material-icons">block</span> <span className="font-semibold">BLocked Institute</span></div>
            <div className="text-2xl font-bold">0</div>
          </div>
        </div>
        {/* Institute Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {institutes.map((inst, idx) => (
            <div key={idx} className="bg-white/70 rounded-xl p-4 flex flex-col gap-2 shadow border border-white/40 min-h-[120px]">
              <div className="flex items-center gap-3">
                <img src={inst.image} alt={inst.name} className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <div className="font-semibold text-lg truncate">{inst.name}</div>
                  {inst.address && <div className="text-sm text-gray-600 truncate">{inst.address}</div>}
                  {inst.branches && <div className="text-xs text-gray-500 flex items-center gap-1"><span className="material-icons text-base">account_tree</span>Branches</div>}
                  {inst.plan && <div className="text-xs text-gray-500">{inst.plan}</div>}
                </div>
                {(inst.plan || idx === 2) && (
                  <button className="bg-green-500 text-white px-4 py-1 rounded-lg font-medium">View</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 