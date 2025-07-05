
import React from 'react';
import { ArrowRight, Zap, Code, Rocket } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full floating-animation blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400/10 rounded-full floating-animation blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-yellow-400/30 rounded-full floating-animation blur-lg" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="hero-text">
            <h1 className="text-5xl lg:text-8xl font-bold leading-tight mb-6">
              <span className="text-white">We build</span>
              <br />
              <span className="text-yellow-400 custom-tech-glow">
                Custom Technology
              </span>
              <br />
              <span className="text-white">Solutions</span>
              <br />
              <span className="text-yellow-400 glow-text">for real world problems</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Transform your business challenges into powerful digital solutions. 
              From custom websites to mobile apps, automation to analytics - we deliver 
              technology that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button
                onClick={onGetStarted}
                className="group bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-yellow-300 pulse-glow yellow-glow"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center glass-effect p-6 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Code size={24} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center glass-effect p-6 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap size={24} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center glass-effect p-6 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Rocket size={24} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
