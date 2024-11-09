import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingTier = ({ title, features, highlighted = false }) => (
  <div className={`flex-1 p-6 rounded-lg m-2 ${highlighted ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white'}`}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="text-green-500 mr-2 mt-1" size={16} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PricingTier;
