
import React from 'react';

const FoundersSection: React.FC = () => {
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold mb-8 text-center">
        <span className="text-yellow-400 glow-text">
          Meet Our Founders
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Founder - CEO */}
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 p-1 group-hover:scale-105 transition-transform duration-300 yellow-glow">
              <img
                src="/lovable-uploads/bd1579fd-5abf-4bfa-8834-b7980935fdc8.png"
                alt="Founder & CEO"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <h4 className="text-xl font-bold text-yellow-400 mb-2 glow-text">Pratham Kataria</h4>
          <h4 className="text-xl font-bold text-yellow-400 mb-2 glow-text">Founder & CEO</h4>
          <div className="glass-effect p-6 rounded-xl">
            <p className="text-gray-300 italic text-lg leading-relaxed">
              "Innovation distinguishes between a leader and a follower. We don't just build technology; we craft digital experiences that transform businesses and empower dreams."
            </p>
          </div>
        </div>

        {/* Co-founder - CTO */}
        <div className="text-center group">
          <div className="relative mb-6">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 p-1 group-hover:scale-105 transition-transform duration-300 yellow-glow">
              <img
                src="/lovable-uploads/d1acc358-fbb4-4bf4-996f-c0fda20cd03e.png"
                alt="Co-founder & CTO"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 w-48 h-48 mx-auto rounded-full bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <h4 className="text-xl font-bold text-yellow-400 mb-2 glow-text">Abhishek Shishodia</h4>
          <h4 className="text-xl font-bold text-yellow-400 mb-2 glow-text">Co-founder & CTO</h4>
          <div className="glass-effect p-6 rounded-xl">
            <p className="text-gray-300 italic text-lg leading-relaxed">
              "The best code is not just functional, it's elegant. Every line we write is a step towards making the impossible, possible. Technology should serve humanity, not the other way around."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
