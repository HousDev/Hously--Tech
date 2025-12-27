import React, { useState } from 'react';
import { Lightbulb, Users, TrendingUp, Search, ClipboardList, Code, Handshake } from 'lucide-react';
import { Link } from "react-router-dom";
import Breadcrumb from '../../components/Breadcrumb';

interface HiringStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: {
    heading: string;
    text: string;
  };
}

const HouslyCareerPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const hiringSteps: HiringStep[] = [
    {
      id: 0,
      title: "Job Opportunities",
      icon: <Search className="w-6 h-6" />,
      content: {
        heading: "Job Opportunities",
        text: "Discover exciting career opportunities at Hously Finntech Realty and take the next step in your professional journey. Apply for your desired position by submitting your resume along with a detailed summary of your skills, qualifications, and professional experience. Our team carefully reviews each application to match candidates with the right role."
      }
    },
    {
      id: 1,
      title: "Shortlisting",
      icon: <ClipboardList className="w-6 h-6" />,
      content: {
        heading: "Shortlisting",
        text: "Our HR team at Hously Finntech Realty carefully reviews every application to ensure a strong alignment between your skills, experience, and the role's requirements. Candidates who best match the position are shortlisted for the next stage of the recruitment process. We value talent and aim to provide a fair and transparent hiring experience."
      }
    },
    {
      id: 2,
      title: "Technical Interview",
      icon: <Code className="w-6 h-6" />,
      content: {
        heading: "Technical Interview",
        text: "In this stage, we evaluate your technical expertise and problem-solving skills in detail. You'll meet with the team members you'll be collaborating with to discuss your past projects and work on relevant real-world challenges. This ensures we understand your capabilities and how well they align with the role's requirements."
      }
    },
    {
      id: 3,
      title: "HR Interview",
      icon: <Users className="w-6 h-6" />,
      content: {
        heading: "HR Interview",
        text: "During the HR interview, we focus on your soft skills, cultural fit, and long-term career aspirations. Our goal is to understand your passions, motivations, and how you can grow with the Hously Finntech Realty team. This stage helps ensure that both you and the company are aligned for a successful and fulfilling collaboration."
      }
    },
    {
      id: 4,
      title: "Decision & Offer",
      icon: <Handshake className="w-6 h-6" />,
      content: {
        heading: "Decision & Offer",
        text: "After a final review by the Hously Finntech Realty hiring committee, successful candidates receive a formal job offer. We guide you through your compensation package, benefits, and any remaining questions to ensure a clear understanding of your role and next steps. Our goal is to make your joining experience smooth and transparent."
      }
    }
  ];

  const progressWidth = `${(activeStep / (hiringSteps.length - 1)) * 100}%`;

  return (
    <>
      <Breadcrumb />
      <div className="min-h-screen bg-white">
        {/* Compact Hero Section */}
        <div className="relative overflow-hidden bg-[#dbeafe] py-10">
          
          {/* Soft Background Accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0270e1] rounded-full blur-3xl opacity-10"></div>
            <div className="absolute top-1/2 -right-24 w-72 h-72 bg-[#fed700] rounded-full blur-3xl opacity-10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            
            {/* Heading */}
            <h1 className="font-bold text-gray-900 leading-tight mb-4">
              <span className="block text-3xl md:text-5xl lg:text-6xl">
                Join <span className="text-[#0270e1]">Hously</span> Finntech Realty
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-1 text-gray-700">
                Build the Future with Technology
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Hously is a fast-growing IT solutions company delivering innovative web,
              cloud, and AI services. Join our team and create technology that matters.
            </p>

            
            {/* Updated Link to use react-router-dom */}
            <Link to="/career/job">
              <button className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] hover:from-[#024a9e] hover:to-[#0270e1] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Opportunities
              </button>
            </Link>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            {/* Innovation */}
            <div className="text-center transition-all duration-500 hover:scale-105">
              <div className="w-18 h-18 bg-gradient-to-br from-[#0270e1] to-[#024a9e]
                rounded-full flex items-center justify-center mx-auto mb-6
                animate-float group-hover:rotate-6 transition-all duration-500 shadow-lg hover:shadow-xl">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                At Hously, innovation drives everything we do. We don't just follow trends —
                we build future-ready technology.
              </p>
            </div>

            {/* Collaboration */}
            <div className="text-center transition-all duration-500 hover:scale-105">
              <div
                className="w-18 h-18 bg-gradient-to-br from-[#0270e1] to-[#024a9e]
                rounded-full flex items-center justify-center mx-auto mb-6
                animate-float transition-all duration-500 shadow-lg hover:shadow-xl"
                style={{ animationDelay: "0.3s" }}
              >
                <Users className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We thrive on teamwork and shared vision, creating a culture where ideas
                grow through collaboration.
              </p>
            </div>

            {/* Growth */}
            <div className="text-center transition-all duration-500 hover:scale-105">
              <div
                className="w-18 h-18 bg-gradient-to-br from-[#0270e1] to-[#024a9e]
                rounded-full flex items-center justify-center mx-auto mb-6
                animate-float transition-all duration-500 shadow-lg hover:shadow-xl"
                style={{ animationDelay: "0.6s" }}
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We invest in your growth with continuous learning, mentorship, and clear
                career progression paths.
              </p>
            </div>

          </div>
        </div>

        {/* How We Hire - Interactive Timeline */}
        <div className="bg-gray-50 py-5 px-4">
          <div className="container mx-auto px-4 max-w-7xl">

            {/* Section Intro */}
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                How We Hire
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Discover exciting career opportunities at Hously Finntech Realty and take the next step in your professional journey. Apply for your desired position by submitting your resume along with a detailed summary of your skills, qualifications, and professional experience.
              </p>
            </div>

            {/* Timeline - IMPROVED MOBILE DESIGN */}
            <div className="relative max-w-5xl mx-auto mb-10 md:mb-12 py-5 px-4 md:px-0">
              {/* Background Line - Mobile (vertical) */}
              <div className="absolute left-11 md:left-1/2 top-0 h-full w-0.5 bg-gray-200 md:hidden" />
              
              {/* Background Line - Desktop (horizontal) */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />

              {/* Progress Line - Mobile (vertical) */}
              <div
                className="absolute left-11 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-500 md:hidden transition-all duration-500"
                style={{ height: progressWidth }}
              />
              
              {/* Progress Line - Desktop (horizontal) */}
              <div
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 -translate-y-1/2 hidden md:block transition-all duration-500"
                style={{ width: progressWidth }}
              />

              {/* Steps */}
              <div className="relative flex flex-col gap-8 md:flex-row md:justify-between md:items-center z-20">
                {hiringSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="relative flex flex-row items-start gap-6 md:flex-col md:items-center md:gap-0 group"
                  >
                    {/* Mobile line connector */}
                    <div className="absolute left-[-17px] top-6 h-full w-0.5 bg-transparent md:hidden" />
                    
                    {/* Step number indicator for mobile */}
                    <div className={`absolute left-[-28px] top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 md:hidden ${
                      activeStep >= index
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'bg-white border-gray-300 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Icon Container */}
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center transition-all relative z-20 focus:outline-none ${
                        activeStep === index
                          ? 'bg-blue-600 border-blue-600 text-white scale-110 shadow-lg shadow-blue-200'
                          : activeStep > index
                          ? 'bg-blue-600 border-blue-600 text-white'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {/* Desktop Icon */}
                      <div className="hidden md:block">{step.icon}</div>
                      
                      {/* Mobile Icon (smaller) */}
                      <div className="md:hidden">
                        {React.cloneElement(step.icon as React.ReactElement)}
                      </div>
                    </button>

                    {/* Title and Description */}
                    <div className="flex-1 md:flex-none md:text-center md:mt-4 md:max-w-[120px]">
                      <p
                        className={`text-base font-semibold mb-1 ${
                          activeStep === index ? 'text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {step.title}
                      </p>
                      {/* Optional description for mobile */}
                      <p className="text-sm text-gray-500 md:hidden">
                        {`Step ${index + 1} of ${hiringSteps.length}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Panel */}
            <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-lg border-t-4 border-blue-600 text-center min-h-[180px]">
              <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
                {hiringSteps[activeStep].content.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {hiringSteps[activeStep].content.text}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HouslyCareerPage;