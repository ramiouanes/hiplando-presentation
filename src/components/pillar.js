import React from 'react';
import { CheckCircle } from 'lucide-react';

const Pillar = ({ title, icon: Icon, items }) => (
  <div className="flex-1 p-4 bg-white rounded-lg shadow-sm m-2">
    <div className="flex items-center mb-4">
      <Icon className="text-blue-500 mr-2" size={24} />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="text-green-500 mr-2" size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Pillar;
