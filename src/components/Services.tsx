import React, { useState } from 'react';
import { 
  X,
  Code, 
  Cloud, 
  Laptop, 
  Palette, 
  UserCircle, 
  Shield, 
  TrendingUp, 
  Smartphone 
} from 'lucide-react';

// TypeScript interfaces
interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  animationDelay: string;
  readMoreLink: string;
  serviceLink: string;
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

// Move AnimatedText component outside to fix render error
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((letter, index) => (
        <div key={index} className="inline-block">
          {letter}
        </div>
      ))}
    </span>
  );
};

// Move ServiceCard component outside - UPDATED with smaller size and consistent height
// ServiceCard component with improved hover effects
// ServiceCard component with subtle hover effects
const ServiceCard: React.FC<{ service: Service; onReadMore: () => void }> = ({ service, onReadMore }) => {
  return (
    <div 
      className="w-full lg:w-1/2 xl:w-1/4 px-3 mt-3 animate-slideInUp group/card"
      style={{ animationDelay: service.animationDelay }}
    >
      <div className="bg-white rounded-2xl p-6 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-gray-200 group-hover/card:-translate-y-1">
        
        {/* Card hover effect - subtle lift and shadow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-gray-50/30 to-transparent"></div>
        </div>
        
        {/* Icon with subtle hover effects */}
        <div className="mb-4 relative z-10">
          <div className="relative inline-block transition-all duration-300 ease-out">
            {/* Icon subtle lift and shadow */}
            <div className="relative text-[#0174d7] transition-all duration-300 group-hover/card:scale-105 group-hover/card:translate-y-[-2px]">
              {React.cloneElement(service.icon as React.ReactElement, {
              })}
            </div>
          </div>
        </div>
        
        {/* Title - no hover color change */}
        <h3 
          className="text-xl font-semibold text-[#051600] mb-2 relative z-10"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          <a
            href={service.serviceLink}
            className="text-[#051600] no-underline relative inline-block"
          >
            {service.title}
          </a>
        </h3>
        
        {/* Description - no hover effects */}
        <p 
          className="text-sm text-[#6F756D] leading-relaxed mt-2 mb-4 flex-grow"
          style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
          {service.description}
        </p>
        
        {/* Read More Link - subtle hover effect */}
          <button
          onClick={onReadMore}
          className="inline-flex items-center font-medium text-xs text-[#051600] hover:text-[#0174d7] transition-all duration-500 no-underline pb-0.5 relative group/button mt-auto z-10 bg-transparent border-none cursor-pointer overflow-hidden"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          {/* Animated background for button */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0174d7]/10 to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000"></span>
          
          <span className="relative z-10 flex items-center gap-2">
            Read More
            <i className="fas fa-long-arrow-right text-xs transition-all duration-500 group-hover/button:translate-x-2 group-hover/button:text-[#0174d7]" />
          </span>
          
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0174d7] transition-all duration-500 group-hover/card:w-full group-hover/card:delay-150"></span>
        </button>
      </div>
    </div>
  );
};

// Modal Component
const ServiceModal: React.FC<{ service: Service | null; onClose: () => void }> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-8 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>

          {/* Icon - Using React Icon */}
          <div className="mb-6">
            <div className="text-[#0174d7]">
              {service.icon}
            </div>
          </div>

          {/* Title */}
          <h3 
            className="text-3xl font-semibold text-[#051600] mb-4"
            style={{ fontFamily: '"Space Grotesk", sans-serif' }}
          >
            {service.title}
          </h3>

          {/* Full Description */}
          <p 
            className="text-[#6F756D] leading-relaxed text-lg"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            {service.fullDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Data for services - Updated with React Icons and smaller size
  const services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and applications built with modern technologies.',
      fullDescription: 'We create custom websites and web applications using the latest technologies like React, Next.js, and Node.js. Our team specializes in building responsive, fast, and user-friendly solutions that drive business growth. From e-commerce platforms to corporate websites, we deliver excellence in every project with a focus on performance, security, and scalability.',
      icon: <Code size={48} strokeWidth={1.5} />,
      animationDelay: '0ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      fullDescription: 'Transform your business with our comprehensive cloud solutions. We provide end-to-end cloud migration, infrastructure setup, and ongoing management services across AWS, Azure, and Google Cloud platforms. Our expertise ensures seamless transitions, cost optimization, enhanced security, and improved scalability for your business operations.',
      icon: <Cloud size={48} strokeWidth={1.5} />,
      animationDelay: '270ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 3,
      title: 'Software Dev',
      description: 'Custom software solutions for business needs.',
      fullDescription: 'We develop custom software solutions tailored to your specific business requirements. Our agile development process ensures efficient delivery of enterprise applications, CRM systems, inventory management tools, and more. We use cutting-edge technologies and best practices to create software that scales with your business and delivers measurable results.',
      icon: <Laptop size={48} strokeWidth={1.5} />,
      animationDelay: '540ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'User-centered design for better engagement.',
      fullDescription: 'Our UI/UX design services focus on creating intuitive and engaging user experiences. We conduct thorough user research, create wireframes and prototypes, and design beautiful interfaces that not only look great but also drive conversions. Every design decision is backed by data and user insights to ensure maximum impact and user satisfaction.',
      icon: <Palette size={48} strokeWidth={1.5} />,
      animationDelay: '810ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Expert technology advisory services.',
      fullDescription: 'Our IT consulting services help businesses make informed technology decisions. We provide strategic guidance on digital transformation, technology stack selection, system architecture, and process optimization. Our consultants bring years of industry experience to help you leverage technology for competitive advantage and operational excellence.',
      icon: <UserCircle size={48} strokeWidth={1.5} />,
      animationDelay: '0ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Security solutions and threat protection.',
      fullDescription: 'Protect your business from cyber threats with our comprehensive cybersecurity services. We offer vulnerability assessments, penetration testing, security audits, and 24/7 monitoring. Our team implements robust security measures including firewalls, encryption, and access controls to safeguard your data and systems from evolving threats.',
      icon: <Shield size={48} strokeWidth={1.5} />,
      animationDelay: '270ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 7,
      title: 'Data Analytics',
      description: 'Actionable insights from business data.',
      fullDescription: 'Turn your data into actionable insights with our analytics services. We help you collect, process, and analyze large datasets to uncover patterns and trends. Our solutions include business intelligence dashboards, predictive analytics, and machine learning models that empower data-driven decision making and drive business growth.',
      icon: <TrendingUp size={48} strokeWidth={1.5} />,
      animationDelay: '540ms',
      readMoreLink: '#',
      serviceLink: '#'
    },
    {
      id: 8,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications.',
      fullDescription: 'We build powerful mobile applications for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, our team delivers high-quality mobile experiences. From concept to launch and beyond, we ensure your app meets user expectations and business objectives.',
      icon: <Smartphone size={48} strokeWidth={1.5} />,
      animationDelay: '810ms',
      readMoreLink: '#',
      serviceLink: '#'
    }
  ];

  return (
    <>
      <section
        id="service-sec"
        className="relative z-10 bg-[#F5F5F5] pt-6 sm:pt-8 pb-16 overflow-hidden"
      >
        {/* Background shape */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[-1] pointer-events-none">
          <img
            src="https://html.themehour.net/robor/demo/assets/img/shape/bg-shape1.png"
            alt="Background shape"
            className="max-w-full h-auto origin-bottom scale-98 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="container mx-auto max-w-[1488px] px-3">
          {/* Title section */}
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-8/12 xl:w-6/12">
              <div className="text-center relative z-10 mb-10 mt-0">
                {/* Shadow title */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] w-max opacity-50 select-none">
                  <h2 
                    className="text-[300px] font-bold text-white leading-none m-0"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    Services
                  </h2>
                </div>
                
                {/* Subtitle - OUR SERVICES with blue color and line */}
                <div className="flex items-center justify-center space-x-2 mb-5">
                  <div className="w-8 h-0.5 bg-[#0174d7]"></div>
                  <span 
                    className="inline-block text-[#0174d7] text-base font-medium uppercase tracking-wide relative pb-1 animate-slideInUp"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    <AnimatedText text="OUR" />
                    {' '}
                    <AnimatedText text="SERVICES" />
                  </span>
                  <div className="w-8 h-0.5 bg-[#0174d7]"></div>
                </div>
                
                {/* Main title */}
                <h2 
                  className="text-3xl md:text-5xl font-bold text-[#051600] mb-4 mt-[-0.4em] animate-slideInUp leading-tight"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  <AnimatedText text="Innovative" />{' '}
                  <AnimatedText text="IT" />{' '}
                  <AnimatedText text="Solutions" />{' '}
                  <AnimatedText text="for" />{' '}
                  <AnimatedText text="Business" />
                </h2>
              </div>
            </div>
          </div>

          {/* Services grid - Added container for better control */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center -mx-3 -mt-3">
              {services.map((service) => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onReadMore={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      <style>{`
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }

  /* Custom hover effects */
  .group-hover\\/card .fas.fa-long-arrow-right {
    transition: transform 0.3s ease;
  }

  /* Ensure smooth transitions */
  * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`}</style>
    </>
  );
};

export default ServicesSection;