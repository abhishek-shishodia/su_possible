
import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div className="bg-black border border-yellow-400/50 rounded-2xl max-w-md w-full mx-4 p-8 shadow-2xl shadow-yellow-500/30 transform transition-all duration-300 scale-100 text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400/20 rounded-full flex items-center justify-center yellow-glow">
          <CheckCircle size={32} className="text-yellow-400" />
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-yellow-400 glow-text">Thank You!</h2>
        
        <p className="text-gray-300 text-lg leading-relaxed">
          A team member will review your query and get back with a solution.
        </p>
        
        <div className="mt-6 w-full bg-gray-800 rounded-full h-1">
          <div className="bg-yellow-400 h-1 rounded-full animate-[width_8s_linear] yellow-glow" style={{animation: 'width 8s ease-out forwards'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
