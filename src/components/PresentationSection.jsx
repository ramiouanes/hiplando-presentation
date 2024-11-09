import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const PresentationSection = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
      >
        <Icon className="text-blue-500 mr-3" size={24} />
        <h2 className="text-xl font-semibold flex-grow text-left">{title}</h2>
        {isOpen ? <ChevronDown className="text-gray-400" /> : <ChevronRight className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white rounded-lg shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
};

export default PresentationSection;