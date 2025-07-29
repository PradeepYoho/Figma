import React from 'react';
import PersonalInfoForm from './PersonalInfoForm';

const steps = [
  { label: 'Personal Info' },
  { label: 'Gallery Info' },
  { label: 'Secial Links' },
  { label: 'Documents' },
  { label: 'Account Details' },
];

const Stepper: React.FC<{ currentStep?: number }> = ({ currentStep = 1 }) => {
  return (
    <div className='p-5'>
    <div className="flex  items-center justify-between px-8 py-6 rounded-2xl bg-white/20 backdrop-blur-md shadow mb-8">
      {steps.map((step, idx) => (
        <React.Fragment key={step.label}>
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mb-2 ${currentStep === idx + 1 ? 'bg-blue-900 text-white' : 'bg-white/60 text-blue-900'}`}>{idx + 1}</div>
            <span className={`text-sm ${currentStep === idx + 1 ? 'text-blue-900 font-semibold' : 'text-gray-700'}`}>{step.label}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className="flex-1 h-1 mx-2 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full opacity-50" />
          )}
        </React.Fragment>
      ))}
    </div>
          <PersonalInfoForm />
          </div>

  );
};

export default Stepper;
