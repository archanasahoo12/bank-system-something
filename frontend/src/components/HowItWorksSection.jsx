// components/HowItWorksSection.js
import React from 'react';

const HowItWorksSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {/* Individual steps or sections */}
      <div className='bg-white p-6 rounded shadow-md'>
        <h3 className='text-lg font-semibold mb-2'>Step 1</h3>
        <p className='text-gray-600'>Sign up for an account with our bank.</p>
      </div>
      <div className='bg-white p-6 rounded shadow-md'>
        <h3 className='text-lg font-semibold mb-2'>Step 2</h3>
        <p className='text-gray-600'>
          Deposit funds into your account securely.
        </p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
