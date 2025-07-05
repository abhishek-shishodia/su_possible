
import React, { useEffect, useRef, useState } from 'react';
import { Search, Target, Code, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "We understand your business challenges",
      details: "Deep dive into your business needs, pain points, and objectives to create a comprehensive understanding of your requirements."
    },
    {
      icon: Target,
      title: "Planning",
      description: "We design the perfect tech solutions for you",
      details: "Strategic planning and architecture design tailored to your specific goals, ensuring scalable and efficient solutions."
    },
    {
      icon: Code,
      title: "Build",
      description: "We develop, automate and integrate systems",
      details: "Expert development using cutting-edge technologies, with seamless integration and automation to streamline your operations."
    },
    {
      icon: Rocket,
      title: "Scale",
      description: "We launch, support, and scale growth",
      details: "Successful deployment with ongoing support, monitoring, and scaling strategies to grow with your business."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-yellow-400 glow-text">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From understanding your challenges to delivering scalable solutions, 
            we follow a proven methodology that ensures success.
          </p>
        </div>

        <div className="process-flow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`process-step ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="process-card p-8 rounded-2xl text-center group hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500">
                    <div className="w-16 h-16 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 yellow-glow">
                      <Icon size={28} className="text-black" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-yellow-400 glow-text">
                      {step.title}
                    </h3>
                    
                    <p className="text-white mb-4 font-medium">
                      {step.description}
                    </p>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.details}
                    </p>
                    
                    <div className="absolute -bottom-4 left-1/2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-black transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300 yellow-glow"></div>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-yellow-400 transform -translate-y-1/2 yellow-glow"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 glass-effect px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center text-black text-sm font-bold yellow-glow">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-white font-medium">4-Step Proven Process</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
