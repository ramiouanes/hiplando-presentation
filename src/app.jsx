import React, { useState } from 'react';
import { Building, Laptop, Users, Shield, Activity, Clock, MapPin, DollarSign, Calendar, ChevronDown, ChevronRight, CheckCircle, Timer, GitBranch } from 'lucide-react';

// Internal components defined in the same file
const PresentationSection = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false); // Changed to true to have sections open by default
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
      >
        <Icon className="text-[#0f603f] mr-3" size={24} />
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
      <Icon className="text-[#0f603f] mr-2" size={24} />
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
    <div className="flex items-center justify-center w-8 h-8 rounded-full text-[#0f603f] text-white font-bold mr-3">
      {number}
    </div>
    <div className="flex-grow">
      <h4 className="font-semibold flex items-center">
        <Icon className="text-[#0f603f] mr-2" size={16} />
        {title}
      </h4>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const PricingTier = ({ title, features, highlighted = false }) => (
  <div className={`flex-1 p-6 rounded-lg m-2 ${highlighted ? 'text-[#0f603f] border-2 text-[#0f603f]' : 'bg-white'}`}>
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
        <img 
          src="/hiplando-presentation/logo.jpg" 
          alt="Hiplando Logo" 
          className="mx-auto h-24 mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hiplando</h1>
        <p className="text-xl text-gray-600">The Horse Community Hub</p>
        <p className="text-lg text-[#0f603f] mt-2">Making horse deals professional and safe</p>
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
            <h3 className="text-xl font-semibold mb-4 text-[#0f603f]">Deal-Based Revenue</h3>
            <div className="flex flex-wrap -m-2">
              <PricingTier
                title="Basic Package"
                features={[
                  "Community deal posting",
                  "Basic documentation templates",
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
            <h3 className="text-xl font-semibold mb-4 text-[#0f603f]">Digital Platform</h3>
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
                  "Deal management system",
                  "Advanced documentation tools",
                  "Professional network access",
                  "Deal progress tracking"
                ]}
              />
            </div>
          </div>

          {/* Additional Revenue Streams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center">
                <Building className="mr-2 text-[#0f603f]" size={20} />
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
                <MapPin className="mr-2 text-[#0f603f]" size={20} />
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
                <Calendar className="mr-2 text-[#0f603f]" size={20} />
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

      {/* Implementation Plan */}
      <PresentationSection title="Implementation Plan" icon={GitBranch}>
        <div className="space-y-8">
          <p className="text-gray-600 mb-4">Cross-platform development strategy using React & React Native Expo</p>
          
          {/* Phase 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#0f603f]">Phase 1 - MVP (3 months)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Competition & Events Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Universal events calendar</li>
                  <li>• Basic venue mapping</li>
                  <li>• Cross-platform filtering</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Basic Horse Management</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Shared forms for horse profiles</li>
                  <li>• Cross-platform media handling</li>
                  <li>• Universal document viewer</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Basic Deal Management</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Responsive deal board</li>
                  <li>• Cross-platform notifications</li>
                  <li>• Shared document templates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#0f603f]">Phase 2 - Enhanced Features (3 months)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Enhanced Events Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Platform-specific calendars</li>
                  <li>• Advanced location services</li>
                  <li>• Cross-device sync</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Advanced Horse Management</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Mobile-first health tracking</li>
                  <li>• Offline capability</li>
                  <li>• Universal team access</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Enhanced Deal Management</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Platform-optimized interfaces</li>
                  <li>• Universal document handling</li>
                  <li>• Cross-platform analytics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#0f603f]">Phase 3 - Professional Features (3 months)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Advanced Events Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Mobile check-in system</li>
                  <li>• Platform-appropriate social features</li>
                  <li>• Universal results tracking</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Professional Network</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Location-based mobile features</li>
                  <li>• Universal booking system</li>
                  <li>• Cross-platform messaging</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Advanced Analytics</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Device-optimized visualizations</li>
                  <li>• Universal data access</li>
                  <li>• Platform-specific exports</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#0f603f]">Phase 4 - Platform Maturity (4-6 months)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Advanced Integration</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Native calendar integration</li>
                  <li>• Universal file handling</li>
                  <li>• Cross-platform sync</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">AI-Powered Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Device-appropriate interfaces</li>
                  <li>• Universal matching system</li>
                  <li>• Platform-specific notifications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="text-[#0f603f] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Key Benefits of Cross-Platform Approach</h3>
            <ul className="space-y-2 text-sm">
              <li>• Single codebase for core business logic</li>
              <li>• Shared components between web and mobile</li>
              <li>• Consistent user experience across platforms</li>
              <li>• Faster feature delivery for both platforms</li>
              <li>• Early market presence on web and mobile</li>
            </ul>
          </div>
        </div>
      </PresentationSection>
    </div>
  );
}