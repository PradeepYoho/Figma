import React from 'react';
import cardIcon from '../assets/cardIcon.png';
import rectangleImage from '../assets/rectangleimage.png';
import University from './University';
interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  imageUrl: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, imageUrl }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-2xl overflow-hidden w-full min-h-[140px] flex"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute "></div> 

      <div className="relative z-10 p-4 sm:p-4 text-[#0E2B56] w-full flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <img src={icon} alt="Icon" className="w-8 h-8" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-4xl font-bold mt-4">{value}</p>
      </div>
    </div>
  );
};

const Dashboardcard: React.FC = () => {
  return  (<div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mt-10 w-full">
      <DashboardCard
        title="Total Institute"
        value={0}
        icon={cardIcon}
        imageUrl={rectangleImage}
      />
      <DashboardCard
        title="Active Institute"
        value={0}
        icon={cardIcon}
        imageUrl={rectangleImage}
      />
      <DashboardCard
        title="Blocked Institute"
        value={0}
        icon={cardIcon}
        imageUrl={rectangleImage}
      />
      
    </div>
    <University/>
    </div>
    
  );
};

export default Dashboardcard;
