
import React from 'react';
import { X, Clock, DollarSign } from 'lucide-react';
import { IndianRupee } from 'lucide-react';


interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const handleGetStarted = () => {
    // Store selected service in localStorage for contact form
    localStorage.setItem('selectedService', service.title);
    
    // Scroll to contact section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
      <div className="bg-black border border-yellow-400/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-yellow-500/20 transform transition-all duration-300 scale-100">
        <div className="sticky top-0 bg-black border-b border-yellow-400/30 p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-yellow-400 glow-text">
              {service.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-yellow-400/10 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-400 hover:text-yellow-400" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {service.description}
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Key Features:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full yellow-glow"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                {/* <DollarSign size={20} className="text-yellow-400" /> */}
                <IndianRupee size={20} className="text-yellow-400" />

                <h4 className="font-bold text-white">Pricing</h4>
              </div>
              <p className="text-2xl font-bold text-yellow-400">{service.pricing}</p>
              <p className="text-1xl font-bold text-white-100 text-center">(Negotiable)</p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-center space-x-3 mb-2">
                <Clock size={20} className="text-yellow-400" />
                <h4 className="font-bold text-white">Timeline</h4>
              </div>
              <p className="text-2xl font-bold text-yellow-400">{service.timeline}</p>
            </div>
          </div>

          <div className="bg-yellow-400/10 border border-yellow-400/30 p-6 rounded-xl mb-6">
            <h4 className="font-bold text-yellow-400 mb-3">Client Onboarding Flow:</h4>
            <ol className="space-y-2 text-sm text-gray-300">
              {/* <li>1. Free Consultation Call</li> */}
              <li>1. Proposal & Timeline Sharing</li>
              <li>2. Kickoff Meeting + Access/Assets Collection</li>
              <li>3. Weekly Updates & Review Checkpoints</li>
              <li>4. Final Delivery + Support Phase</li>
            </ol>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-yellow-400 text-black py-3 px-8 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 yellow-glow"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
