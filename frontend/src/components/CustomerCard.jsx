// components/CustomerCard.js
import React from 'react';
import PropTypes from 'prop-types';

const CustomerCard = ({ name, email, avatar, feedback }) => {
  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <div className="flex items-center mb-4">
        {avatar && <img src={avatar} alt={`${name}'s Avatar`} className="w-10 h-10 rounded-full mr-2" />}
        <h3 className='text-lg font-semibold'>{name}</h3>
      </div>
      <p className='text-gray-600 mb-4'>{feedback || 'No feedback available'}</p>
      {email && (
        <div className="text-sm text-gray-500">
          <span className="font-semibold">Email:</span> {email}
        </div>
      )}
    </div>
  );
};

CustomerCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,
  feedback: PropTypes.string,
};

export default CustomerCard;
