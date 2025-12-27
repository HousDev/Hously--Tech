import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, TrendingUp, CheckCircle, X } from 'lucide-react';
// Types
interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  client: string;
  duration: string;
  teamSize: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

// Data
const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    slug: "smart-real-estate-platform",
    title: "Smart Real Estate Management Platform",
    category: "Real Estate Solutions",
    description: "Digital platform for property listings, bookings, and client relationship management.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    metrics: "Increased lead conversion by 40%, reduced manual work by 60%",
    client: "Hously Realty",
    duration: "7 months",
    teamSize: "9 developers",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    challenge: "Manual handling of property listings and customer inquiries caused delays and inefficiencies.",
    solution: "We built a centralized real estate management system with automated listings, inquiry tracking, and booking workflows.",
    results: [
      "40% increase in qualified leads",
      "60% reduction in manual tasks",
      "Faster customer response time",
      "Improved agent productivity"
    ],
    testimonial: {
      quote: "This platform simplified our entire real estate operations.",
      author: "Rahul Patil",
      position: "Director, Hously Realty"
    }
  },
  {
    id: 2,
    slug: "real-estate-virtual-tour",
    title: "Real Estate Virtual Tour Platform",
    category: "Real Estate Solutions",
    description: "360° virtual property tours with smart property recommendations.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
    metrics: "Increased property views by 75%, reduced site visits by 50%",
    client: "UrbanNest Properties",
    duration: "6 months",
    teamSize: "8 specialists",
    technologies: ["React", "Three.js", "WebGL", "Node.js"],
    challenge: "Customers were unable to visit properties frequently due to time and location constraints.",
    solution: "We developed an immersive virtual tour platform enabling buyers to explore properties remotely.",
    results: [
      "75% increase in online property engagement",
      "50% reduction in physical visits",
      "Higher buyer interest and faster closures"
    ],
    testimonial: {
      quote: "Virtual tours helped us reach more buyers without physical limitations.",
      author: "Sneha Kulkarni",
      position: "Sales Head, UrbanNest"
    }
  },
  {
    id: 3,
    slug: "finance-accounting-automation",
    title: "Finance & Accounting Automation System",
    category: "Finance & FinTech",
    description: "Secure financial automation system for billing, reporting, and transaction tracking.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
    metrics: "Improved processing speed by 50%, enhanced data accuracy",
    client: "FinCore Solutions",
    duration: "8 months",
    teamSize: "10 developers",
    technologies: ["Node.js", "PostgreSQL", "AWS", "Power BI"],
    challenge: "Manual financial reporting caused errors and delayed decision-making.",
    solution: "We built an automated accounting and reporting system with real-time dashboards.",
    results: [
      "50% faster financial processing",
      "Improved reporting accuracy",
      "Reduced manual errors"
    ],
    testimonial: {
      quote: "Our finance operations are now faster and more reliable.",
      author: "Amit Shah",
      position: "CFO, FinCore Solutions"
    }
  },
  {
    id: 4,
    slug: "mobile-banking-application",
    title: "Mobile Banking Application",
    category: "Finance & FinTech",
    description: "Secure mobile banking app with biometric authentication and AI insights.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop",
    metrics: "Gained 500K+ users, improved customer satisfaction by 65%",
    client: "TrustBank Ltd.",
    duration: "10 months",
    teamSize: "14 specialists",
    technologies: ["React Native", "Node.js", "AWS", "Biometric Auth"],
    challenge: "Legacy banking apps lacked modern security and smooth user experience.",
    solution: "We developed a modern mobile banking app with secure authentication and real-time analytics.",
    results: [
      "500K+ active users",
      "65% increase in customer satisfaction",
      "Enhanced transaction security"
    ],
    testimonial: {
      quote: "Customers love the speed and security of our new app.",
      author: "Neha Verma",
      position: "Digital Head, TrustBank"
    }
  },
  {
    id: 5,
    slug: "enterprise-it-solution",
    title: "Custom Enterprise IT Solution",
    category: "IT Services & Software",
    description: "Scalable enterprise IT solution for workflow automation and analytics.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    metrics: "Boosted operational efficiency by 45%, improved system reliability",
    client: "TechSphere Pvt Ltd",
    duration: "9 months",
    teamSize: "12 engineers",
    technologies: ["Next.js", "Node.js", "Microservices", "AWS"],
    challenge: "Disconnected systems caused operational delays and poor visibility.",
    solution: "We built a unified IT system integrating workflows, analytics, and reporting.",
    results: [
      "45% improvement in efficiency",
      "Centralized system control",
      "Improved scalability"
    ],
    testimonial: {
      quote: "Our internal processes are now seamless and efficient.",
      author: "Rohit Mehta",
      position: "CTO, TechSphere"
    }
  },
  {
    id: 6,
    slug: "enterprise-cybersecurity-framework",
    title: "Enterprise Cybersecurity Framework",
    category: "IT Services & Cybersecurity",
    description: "Advanced cybersecurity framework protecting enterprise systems.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    metrics: "Prevented 99.9% of threats, reduced incidents by 85%",
    client: "SecureNet Systems",
    duration: "6 months",
    teamSize: "11 security experts",
    technologies: ["SIEM", "Zero Trust", "Cloud Security", "Threat Monitoring"],
    challenge: "Frequent cyber threats and lack of centralized security monitoring.",
    solution: "We implemented a real-time cybersecurity framework with threat detection and response.",
    results: [
      "99.9% threat prevention",
      "85% reduction in security incidents",
      "Improved compliance"
    ],
    testimonial: {
      quote: "This solution gave us complete confidence in our IT security.",
      author: "Vikram Joshi",
      position: "CISO, SecureNet Systems"
    }
  }
];


// Case Study Details Card Component
const CaseStudyDetailsCard: React.FC<{ study: CaseStudy; onClose: () => void }> = ({ study, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Card Container */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg hover:scale-110 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Hero Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 flex items-end p-6">
            <div>
              <span className="inline-block bg-[#ffd801] text-[#0375d5] px-3 py-1 rounded-full text-xs font-medium mb-2">
                {study.category}
              </span>
              <h2 className="text-2xl font-bold text-white">{study.title}</h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-12rem)] p-6">
          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-[#0375d5]" />
                <span className="text-sm font-medium text-gray-700">Client</span>
              </div>
              <p className="text-sm text-gray-600">{study.client}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-4 h-4 text-[#0375d5]" />
                <span className="text-sm font-medium text-gray-700">Duration</span>
              </div>
              <p className="text-sm text-gray-600">{study.duration}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{study.description}</p>
          </div>

          {/* Key Results */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h3>
            <div className="space-y-2">
              {study.results.slice(0, 3).map((result, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.slice(0, 5).map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#0375d5]/10 text-[#0375d5] px-3 py-1 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Preview */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-start gap-2 mb-3">
              <div className="text-[#ffd801] text-3xl leading-none">"</div>
              <p className="text-sm text-gray-700 italic line-clamp-3">
                {study.testimonial.quote}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0375d5] rounded-full flex items-center justify-center text-white text-xs font-bold">
                {study.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{study.testimonial.author}</p>
                <p className="text-xs text-gray-600">{study.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with View Full Button */}
        <div className="border-t p-4">
          <button className="w-full bg-[#0375d5] text-white py-3 rounded-lg font-medium hover:bg-[#025a9e] transition-colors">
            View Full Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const CaseStudyApp: React.FC = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (

<div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
     

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedStudy(study)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-[#ffd801] text-[#0375d5] px-4 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0375d5] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {study.description}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700 font-medium">{study.metrics}</span>
                  </div>

                  {/* Read More Button */}
                  <button className="flex items-center gap-2 text-[#0375d5] font-medium group-hover:gap-4 transition-all">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Details Card Overlay */}
      {selectedStudy && (
        <CaseStudyDetailsCard 
          study={selectedStudy} 
          onClose={() => setSelectedStudy(null)} 
        />
      )}
    </div>
  );
};

export default CaseStudyApp;