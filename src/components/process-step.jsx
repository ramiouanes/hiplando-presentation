import React from 'react';

const ProcessStep = ({ number, title, description, icon: Icon }) => (
  <div className="flex items-start mb-4">
    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-3">
      {number}
    </div>
    <div className="flex-grow">
      <h4 className="font-semibold flex items-center">
        <Icon className="text-blue-500 mr-2" size={16} />
        {title}
      </h4>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

export default ProcessStep;
