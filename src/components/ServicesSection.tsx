
import React, { useState } from 'react';
import { Globe, Smartphone, Database, Zap, BarChart, Rocket, Search, Palette, Megaphone, Video } from 'lucide-react';
import ServiceModal from './ServiceModal';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Website Development",
      icon: Globe,
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Development", "CMS Integration", "Performance Optimization", "SEO-Ready"],
      pricing: "₹15,000 – ₹40,000+",
      timeline: "2–4 weeks"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native iOS/Android Apps", "React Native / Flutter", "App Store Optimization", "Push Notifications", "Scalable Architecture"],
      pricing: "₹50,000 – ₹1,50,000+",
      timeline: "8–10 weeks"
    },
    {
      id: 3,
      title: "Web Applications",
      icon: Database,
      description: "Complex web applications and SaaS platforms built for scalability and performance.",
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Hosting", "Enterprise-Grade Security"],
      pricing: "₹1,50,000 – ₹4,50,000+",
      timeline: "12–18 weeks"
    },
    {
      id: 4,
      title: "Process Automation",
      icon: Zap,
      description: "Streamline operations with tech-driven process efficiency.",
      features: ["Data Entry Automation", "Report Generation", "Inventory Management", "Customer Support Bots", "Third-party Integrations"],
      pricing: "₹25,000 – ₹3,50,000+",
      timeline: "2–4 weeks"
    },
    {
      id: 5,
      title: "Analytics & Reporting",
      icon: BarChart,
      description: "Make smarter decisions with real-time insights and performance tracking tools.",
      features: ["KPI & Performance Dashboards", "Custom Analytics Reports", "ROI & Campaign Analysis", "Data Visualization & BI Tools"],
      pricing: "₹15,000 – ₹40,000+",
      timeline: "1–4 weeks"
    },
    {
      id: 6,
      title: "Startups & Tech Companies",
      icon: Rocket,
      description: "End-to-end digital solutions — from MVP to market-ready. We help startups build, launch, and scale smarter with technology.",
      features: ["MVP Design & Development", "Investor Pitch Deck Creation", "Product UI/UX Design", "Growth Marketing Strategies", "Tech Consultation"],
      pricing: "₹1,50,000 – ₹4,50,000+",
      timeline: "8–14 weeks"
    },
    {
      id: 7,
      title: "SEO & Digital Marketing",
      icon: Search,
      description: "Drive targeted traffic and grow your online presence with result-driven SEO strategies.",
      features: ["Keyword Research & Strategy", "On-Page SEO Optimization", "Technical SEO Audits", "Backlink & Link-Building Campaigns"],
      pricing: "₹15,000 – ₹40,000+",
      timeline: "Ongoing"
    },
    {
      id: 8,
      title: "UI/UX Design",
      icon: Palette,
      description: "User-centered design for high-converting digital experiences.",
      features: ["User Research", "Wireframing & Prototyping", "User Testing", "UI Design Systems", "Conversion Optimization"],
      pricing: "₹10,000 – ₹35,000+",
      timeline: "2–4 weeks"
    },
    {
      id: 9,
      title: "Branding & Design",
      icon: Megaphone,
      description: "Create a memorable brand that connects with your audience and stands out in any market.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity Systems", "Print & Packaging Design"],
      pricing: "₹10,000 – ₹30,000+",
      timeline: "2–3 weeks"
    },
    {
      id: 10,
      title: "Content Creation",
      icon: Video,
      description: "Engaging video content that tells your story, builds trust, and drives results.",
      features: ["Promotional & Corporate Videos", "Social Media Content (Reels, Shorts)", "Explainer Videos & Product Demos", "Video Ads"],
      pricing: "₹5,000 – ₹30,000+",
      timeline: "1–2 weeks"
    }
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-400 glow-text">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tech solutions tailored to transform your business challenges into opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service)}
                  className="service-card p-6 rounded-2xl cursor-pointer group"
                >
                  <div className="w-12 h-12 mb-4 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 yellow-glow">
                    <Icon size={24} className="text-black" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-yellow-400 group-hover:text-yellow-300 transition-colors glow-text">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>{service.pricing.split('–')[0]}</span>
                    <span>{service.timeline}</span>
                  </div>
                  
                  <div className="mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 yellow-glow"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceModal 
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ServicesSection;
