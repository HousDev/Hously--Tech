import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Link } from "react-router-dom";

// Replace the individual imports with:
import 'swiper/swiper-bundle.css';

const CaseStudiesSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(6);

  const renderAnimatedText = (text: string) => {
    const words = text.split(' ');
    
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block">
        {word.split('').map((letter, letterIndex) => (
          <span
            key={`${wordIndex}-${letterIndex}`}
            className="inline-block animate-fadeInUp"
            style={{
              animationDelay: `${(wordIndex * 100 + letterIndex * 50)}ms`
            }}
          >
            {letter}
          </span>
        ))}
        {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  };

  const caseStudies = [
    {
      id: 1,
      title: "Smart Real Estate Management Platform",
      category: "Real Estate Solutions",
      description: "End-to-end property management system for listings, bookings, and customer engagement.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      metrics: "Increased lead conversion by 40%, reduced manual work by 60%"
    },
    {
      id: 2,
      title: "Finance & Accounting Automation System",
      category: "Finance & FinTech",
      description: "Secure financial platform for billing, reporting, and transaction tracking.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
      metrics: "Improved processing speed by 50%, enhanced data accuracy"
    },
    {
      id: 3,
      title: "Custom Enterprise IT Solution",
      category: "IT Services & Software",
      description: "Scalable IT solution for business operations, analytics, and workflow automation.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      metrics: "Boosted operational efficiency by 45%, improved system reliability"
    },
    {
      id: 4,
      title: "Real Estate Virtual Tour Platform",
      category: "Real Estate Solutions",
      description: "Immersive 360° virtual property tours with AI-powered property recommendations.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      metrics: "Increased property views by 75%, reduced physical visits by 50%"
    },
    {
      id: 5,
      title: "Digital Banking Transformation",
      category: "Finance & FinTech",
      description: "Modern mobile banking app with biometric authentication and AI-driven financial insights.",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop",
      metrics: "Gained 500K+ users, improved customer satisfaction by 65%"
    },
    {
      id: 6,
      title: "Enterprise Cybersecurity Framework",
      category: "IT Services & Software",
      description: "Comprehensive security solution protecting against advanced cyber threats.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      metrics: "Prevented 99.9% of threats, reduced security incidents by 85%"
    }
  ];

  const subTitle = "Case Study";
  const mainTitle = "IT Projects Case Study";
  const description = "Explore our portfolio of successful technology implementations across various industries, showcasing our expertise in delivering innovative solutions.";

  return (
    <>
<section
  id="case-studies"
  className="relative overflow-hidden pt-[110px] pb-[40px] bg-white"
>
         <div className="container mx-auto px-6 max-w-[1488px]">
          {/* Title Section */}
          <div className="flex flex-wrap justify-center -mx-3">
            <div className="w-full xl:w-1/2 lg:w-2/3 px-3">
              <div className="text-center mb-[42px] relative z-10 -mt-4">
                {/* Shadow Title */}
                <div
                  className="text-[400px] font-bold leading-none text-gray-100 opacity-70
                             relative left-1/2 -translate-x-1/2 translate-y-10
                             w-max -my-[0.6em] z-[-2]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Case
                </div>

                {/* Sub Title */}
                <div className="flex items-center justify-center space-x-3 mb-7">
  {/* Left line */}
  <div className="w-15 h-[1px] bg-[#0076d8]"></div>

  {/* Center text */}
  <span
    className="inline-block text-[16px] font-medium uppercase tracking-wider text-[#0076d8] relative pb-1 animate-slideInUp"
    style={{
      fontFamily: '"Space Grotesk", sans-serif',
      animationDelay: '0ms',
    }}
  >
    {renderAnimatedText(subTitle)}
  </span>

  {/* Right line */}
  <div className="w-15 h-[1px] bg-[#0076d8]"></div>
</div>


                {/* Main Title */}
               <h2
  className="text-[40px] md:text-[64px] font-bold leading-tight text-gray-900 mb-5 -mt-7 animate-slideInUp"
  style={{
    fontFamily: '"Space Grotesk", sans-serif',
    animationDelay: '0ms',
  }}
>
  {renderAnimatedText(mainTitle)}
</h2>


                {/* Description */}
                <p
                  className="text-gray-600 leading-[1.75] text-[18px] mb-6 animate-slideInUp max-w-2xl mx-auto"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    animationDelay: '200ms',
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="container mx-auto px-4 md:px-6 max-w-[1500px]">
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{
                el: '.custom-pagination',
                type: 'progressbar',
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setTotalSlides(caseStudies.length);
              }}
              className="project-slider pb-10"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  centeredSlides: true,
                }
              }}
            >
              {caseStudies.map((study) => (
                <SwiperSlide key={study.id} className="max-w-full md:max-w-[870px]">
                  <div className="group relative overflow-hidden rounded-2xl md:rounded-[30px] cursor-pointer mx-2 md:mx-0">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl md:rounded-[30px]">
                      <img
                        alt={study.title}
                        src={study.image}
                        className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 md:p-12 flex flex-col justify-end">
                      {/* Category Tag */}
                      <div className="inline-block mb-4 md:mb-6">
                        <span className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-full md:rounded-[20px] px-3 py-1 text-white text-sm font-medium">
                          {study.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-bold text-xl md:text-[36px] leading-tight mb-3 md:mb-4 max-w-full md:max-w-[441px]">
                        {study.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/90 text-base md:text-lg mb-3 md:mb-4 max-w-full md:max-w-[441px]">
                        {study.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex items-center gap-4 mt-3 md:mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white text-sm font-medium">{study.metrics}</span>
                        </div>
                      </div>

                      {/* View Details Button */}
                    <Link
  to="/CaseStudy"
  className="mt-6 md:mt-8 inline-flex items-center gap-2 text-white font-medium hover:text-blue-300 transition-colors"
>
  View Case Study
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Controls */}
            <div className="mt-8 md:mt-[60px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 max-w-[1404px] mx-auto px-4">
              {/* Slide Counter */}
              <div className="flex items-center gap-2 order-2 md:order-1">
                <span className="text-2xl md:text-[32px] font-bold text-gray-900 leading-none">
                  {currentSlide.toString().padStart(2, '0')}
                </span>
                <span className="text-gray-400 text-xl md:text-[24px] leading-none">/</span>
                <span className="text-gray-400 text-xl md:text-[24px] leading-none">
                  {totalSlides.toString().padStart(2, '0')}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="flex-1 relative h-[2px] bg-gray-200 overflow-hidden max-w-full md:max-w-[1000px] order-1 md:order-2 w-full md:w-auto">
                <div
                  className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-300"
                  style={{
                    width: `${(currentSlide / totalSlides) * 100}%`,
                  }}
                />
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 order-3">
                <button 
                  className="custom-prev w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button 
                  className="custom-next w-10 h-10 md:w-[52px] md:h-[52px] rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        /* Custom Swiper Styles */
        .project-slider .swiper-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .project-slider .swiper-slide-active {
          opacity: 1;
        }

        .swiper-pagination-progressbar {
          position: relative !important;
          height: 1px !important;
          background: #D7D7D7 !important;
          margin: 0 !important;
        }

        .swiper-pagination-progressbar-fill {
          background: #0076d8 !important;
          height: 3px !important;
          top: -1px !important;
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 768px) {
          .project-slider .swiper-slide {
            opacity: 0.7;
          }
          
          .project-slider .swiper-slide-active {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default CaseStudiesSection;