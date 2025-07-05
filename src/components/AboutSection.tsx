
import React from 'react';
import { Users, Award, Clock, Lightbulb } from 'lucide-react';
import FoundersSection from './FoundersSection';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Lightbulb, value: "2+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400 glow-text">
                About Spread Up
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are a passionate team of tech innovators dedicated to transforming businesses 
              through custom technology solutions. Our mission is to bridge the gap between 
              complex business challenges and elegant digital solutions.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From startups to established enterprises, we've helped businesses across industries 
              leverage technology to streamline operations, enhance customer experiences, and 
              drive sustainable growth.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-3 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 yellow-glow">
                      <Icon size={24} className="text-black" />
                    </div>
                    <div className="text-3xl font-bold text-yellow-400 mb-1 glow-text">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400 glow-text">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 yellow-glow">
                    <span className="text-black text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Custom Solutions</h4>
                    <p className="text-gray-300">Tailored technology solutions designed specifically for your unique business needs and challenges.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 yellow-glow">
                    <span className="text-black text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Proven Process</h4>
                    <p className="text-gray-300">Our 4-step methodology ensures successful project delivery from discovery to scaling.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 yellow-glow">
                    <span className="text-black text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Ongoing Support</h4>
                    <p className="text-gray-300">24/7 support and maintenance to ensure your solutions continue to perform optimally.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-xl"></div>
          </div>
        </div>

        <FoundersSection />
      </div>
    </section>
  );
};

export default AboutSection;
