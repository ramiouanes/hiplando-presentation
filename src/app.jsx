import React, { useState } from 'react';
import { Building, Laptop, Users, Shield, Activity, Clock, MapPin, DollarSign, Calendar, ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';

// Internal components defined in the same file
const PresentationSection = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(true); // Changed to true to have sections open by default
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

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hiplando</h1>
        <p className="text-xl text-gray-600">The Horse Community Hub</p>
        <p className="text-lg text-blue-500 mt-2">Making horse deals professional and safe</p>
      </div>

      {/* Vision */}
      <PresentationSection title="Our Vision" icon={Shield}>
        <p className="text-gray-700 leading-relaxed">
          A central platform that brings together the horse community, combining professional 
          facilities, digital tools, and community expertise to make horse deals better for everyone.
        </p>
      </PresentationSection>

      {/* Three Pillars */}
      <PresentationSection title="Three Integrated Pillars" icon={Building}>
        <div className="flex flex-wrap -m-2">
          <Pillar
            title="Physical Hub"
            icon={Building}
            items={[
              "Professional trial environment",
              "Accommodation for visitors",
              "Transport coordination",
              "Meeting place for community"
            ]}
          />
          <Pillar
            title="Digital Platform"
            icon={Laptop}
            items={[
              "Horse Management System",
              "Deal Management System",
              "Document templates",
              "Progress tracking"
            ]}
          />
          <Pillar
            title="Community Network"
            icon={Users}
            items={[
              "Exclusive WhatsApp community",
              "Regular professional events",
              "Knowledge sharing",
              "Expert network access"
            ]}
          />
        </div>
      </PresentationSection>

      {/* How It Works */}
      <PresentationSection title="How It Works" icon={Activity}>
        <div className="space-y-6">
          <ProcessStep
            number="1"
            title="Initial Contact"
            description="Buyer shares requirements, we search database & community for matches"
            icon={MapPin}
          />
          <ProcessStep
            number="2"
            title="Selection Process"
            description="Facility visits, professional assessment, community insights"
            icon={Clock}
          />
          <ProcessStep
            number="3"
            title="Trial & Completion"
            description="Structured trial period, documentation, transport coordination"
            icon={Activity}
          />
        </div>
      </PresentationSection>

      {/* Revenue Model */}
      <PresentationSection title="Revenue Model" icon={DollarSign}>
        <div className="space-y-8">
          {/* Deal-Based Revenue */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Deal-Based Revenue</h3>
            <div className="flex flex-wrap -m-2">
              <PricingTier
                title="Basic Package"
                features={[
                  "Deal management system",
                  "Document templates",
                  "Community posting",
                  "Base commission rate"
                ]}
              />
              <PricingTier
                title="Professional Package"
                highlighted={true}
                features={[
                  "Everything in Basic +",
                  "Facility usage for trials",
                  "Professional photos/videos",
                  "Basic vet check coordination"
                ]}
              />
              <PricingTier
                title="Premium Package"
                features={[
                  "Everything in Professional +",
                  "Transport coordination",
                  "Extended trial period",
                  "Accommodation for visitors"
                ]}
              />
            </div>
          </div>

          {/* Digital Platform */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Digital Platform</h3>
            <div className="flex flex-wrap -m-2">
              <PricingTier
                title="Free Features"
                features={[
                  "Competition calendar",
                  "Location-based service search",
                  "Venue directory",
                  "Basic community access"
                ]}
              />
              <PricingTier
                title="Premium Subscription"
                highlighted={true}
                features={[
                  "Complete horse management",
                  "Health tracking",
                  "Performance analytics",
                  "Document management",
                  "Professional network access"
                ]}
              />
            </div>
          </div>

          {/* Additional Revenue Streams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Building className="mr-2 text-blue-500" size={20} />
                Facility Usage
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Arena rental</li>
                <li>• Horse box rental</li>
                <li>• Photo/video sessions</li>
                <li>• Event space rental</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <MapPin className="mr-2 text-blue-500" size={20} />
                Transport Service
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Distance-based rates</li>
                <li>• Special requirements</li>
                <li>• International coordination</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Calendar className="mr-2 text-blue-500" size={20} />
                Events
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Community gatherings</li>
                <li>• Professional meetings</li>
                <li>• Training sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </PresentationSection>
    </div>
  );
}