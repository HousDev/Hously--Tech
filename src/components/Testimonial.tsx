import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const TestimonialsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [, setCurrentSlide] = useState(0);

  const renderAnimatedText = (text: string) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className="inline-block animate-fadeInUp"
        style={{
          animationDelay: `${index * 50}ms`
        }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  const testimonials = [
    {
      id: 1,
      name: "Laxman",
      position: "Co-founder",
      rating: 5,
      text: "Their AI-powered analytics platform transformed our decision-making process, increasing efficiency by 65% in the first quarter with seamless integration and exceptional 24/7 support.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-1.jpg"
    },
    {
      id: 2,
      name: "Kamlesh",
      position: "Co-founder",
      rating: 5,
      text: "Cloud migration executed flawlessly with zero downtime across 15TB of data. Healthcare compliance expertise and security protocols reduced our infrastructure costs by 40% overall.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-2.jpg"
    },
    {
      id: 3,
      name: "Satish ",
      position: "Co-founder",
      rating: 5,
      text: "Our e-commerce platform's performance increased by 300% after their optimization. The AI chatbot reduced customer service costs by 45% while improving satisfaction scores significantly.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-3.jpg"
    },
    {
      id: 4,
      name: "Sanchi",
      position: "Co-founder",
      rating: 5,
      text: "Enterprise security solution prevented 12 potential breaches in one year. Compliance audits passed perfectly and system uptime maintained 99.99% reliability through advanced monitoring.",
      image: "https://html.themehour.net/robor/demo/assets/img/testimonial/testi1-4.jpg"
    },
  ];

  return (
    <>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slideInRight {
          animation: slideInRight 0.9s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        /* Custom Pagination Bullets */
        .testimonial-bullet {
          display: inline-block;
          width: 40px;
          height: 6px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 4px;
        }

        .testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #6D30FB;
          width: 60px;
        }

        /* Mobile & Tablet Pagination */
        .mobile-testimonial-bullet {
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 2px;
        }

        .mobile-testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #0076d8;
          width: 40px;
        }

        /* Tablet Pagination */
        .tablet-testimonial-bullet {
          display: inline-block;
          width: 35px;
          height: 5px;
          background-color: #D7D7D7;
          border-radius: 10px;
          transition: all 0.4s;
          cursor: pointer;
          margin: 0 3px;
        }

        .tablet-testimonial-bullet.swiper-pagination-bullet-active {
          background-color: #6D30FB;
          width: 50px;
        }
      `}</style>

      {/* Mobile Version (0px to 767px) */}
      <div className="block md:hidden">
        <section className="relative overflow-hidden py-5 bg-gray-100 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Title Section */}
            <div className="text-center mb-10">
              <span className="inline-block text-blue-600 font-medium uppercase tracking-wider text-sm mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                What Our Clients Say About Us
              </h2>
              <p className="text-gray-600 text-base max-w-md mx-auto mb-8">
                Hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            {/* Mobile Testimonial Slider */}
            <div className="mb-2">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.mobile-testimonial-next',
                  prevEl: '.mobile-testimonial-prev',
                }}
                pagination={{
                  el: '.mobile-testimonial-pagination',
                  clickable: true,
                  renderBullet: (_index: number, className: string) => {
                    return `<span class="${className} mobile-testimonial-bullet"></span>`;
                  },
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="pb-10"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg mx-2">
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-blue-600 mb-4 text-lg">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        "{testimonial.text}"
                      </p>

                      {/* Profile */}
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <img
                            alt={testimonial.name}
                            src={testimonial.image}
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile Slider Controls */}
              <div className="flex items-center justify-center gap-4 mt-5">
                {/* Previous Button */}
                <button className="mobile-testimonial-prev flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Pagination */}
                <div className="mobile-testimonial-pagination flex items-center justify-center gap-1"></div>

                {/* Next Button */}
                <button className="mobile-testimonial-next flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tablet Version (768px to 1023px) - INCREASED HEIGHT */}
      <div className="hidden md:block lg:hidden">
        <section className="relative overflow-hidden py-5 bg-gray-100 px-2">
          <div className="max-w-6xl mx-auto">
            {/* Tablet Title Section - INCREASED MARGINS */}
            <div className="text-center mb-14">
              <span className="inline-block text-blue-600 font-medium uppercase tracking-wider text-base mb-6">
                Testimonials
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                What Our Clients Say About Us
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                Hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            {/* Tablet Slider Container - INCREASED HEIGHT */}
            <div className="relative min-h-[510px]">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={32}
                slidesPerView={1.5}
                centeredSlides={true}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.tablet-testimonial-next',
                  prevEl: '.tablet-testimonial-prev',
                }}
                pagination={{
                  el: '.tablet-testimonial-pagination',
                  clickable: true,
                  renderBullet: (_index: number, className: string) => {
                    return `<span class="${className} tablet-testimonial-bullet"></span>`;
                  },
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="pb-16"
                breakpoints={{
                  768: {
                    slidesPerView: 1.3,
                    spaceBetween: 28,
                  },
                  900: {
                    slidesPerView: 1.5,
                    spaceBetween: 32,
                  }
                }}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl h-full min-h-[400px]">
                      {/* Rating Stars - LARGER */}
                      <div className="flex gap-2 text-blue-600 mb-6 text-xl">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text - LARGER */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        "{testimonial.text}"
                      </p>

                      {/* Profile - LARGER */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="flex-shrink-0">
                          <img
                            alt={testimonial.name}
                            src={testimonial.image}
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-xl">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-base">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Tablet Controls - LARGER */}
              <div className="flex items-center justify-center gap-8 mt-5">
                <button className="tablet-testimonial-prev flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="tablet-testimonial-pagination justify-between"></div>

                <button className="tablet-testimonial-next flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop Version (1024px and above) */}
      <div className="hidden lg:block">
        <section className="relative overflow-hidden pt-2 pb-8 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1488px]">
            <div className="flex flex-wrap -mx-3 flex-row-reverse items-start">
              {/* Right Side - Image */}
              <div className="w-full xl:w-7/12 px-3 mt-12">
                <div className="text-right">
                  <div className="inline-block rounded-3xl overflow-hidden max-w-full xl:max-w-[773px] animate-slideInRight">
                    <img
                      alt="Testimonial"
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d
"
                      className="w-full h-200"
                    />
                  </div>
                </div>
              </div>

              {/* Left Side - Content */}
              <div className="w-full xl:w-5/12 px-3 mt-12">
                {/* Title Area */}
                <div className="mb-10 lg:mb-[42px] relative z-10 -mt-4">
                  <span
                    className="inline-block text-base lg:text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-4 lg:mb-7 relative pb-1 animate-slideInUp"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {renderAnimatedText('Testimonials')}
                  </span>

                  <h2
                    className="text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight lg:leading-tight text-gray-900 mb-5 -mt-2 lg:-mt-6 animate-slideInUp"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {renderAnimatedText('What Our Clients  Say About us')}
                  </h2>
                </div>

                {/* Slider Area */}
                <div className="relative z-10 mb-6 animate-slideInUp lg:-mr-[372px] xl:-mr-[372px]">
                  <div className="-m-4 lg:-m-[25px] px-3">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={24}
                      slidesPerView={'auto'}
                      centeredSlides={false}
                      loop={true}
                      speed={1000}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                      }}
                      pagination={{
                        el: '.testimonial-pagination',
                        clickable: true,
                        renderBullet: (_index: number, className: string) => {
                          return `<span class="${className} testimonial-bullet"></span>`;
                        },
                      }}
                      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      className="testimonial-slider py-4 lg:py-6.25"
                      breakpoints={{
                        1024: {
                          slidesPerView: 'auto',
                          spaceBetween: 24,
                        },
                        1280: {
                          slidesPerView: 'auto',
                          spaceBetween: 24,
                        }
                      }}
                    >
                      {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className="!w-full lg:!w-[380px] xl:!w-[472px]">
                          <div className="bg-white rounded-2xl lg:rounded-[30px] p-6 lg:p-8 xl:p-11 shadow-lg lg:shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
                            {/* Rating Stars */}
                            <div className="flex gap-2 text-blue-600 mb-4 lg:mb-6 text-lg lg:text-xl">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <svg key={i} className="w-4 lg:w-5 h-4 lg:h-5 fill-current" viewBox="0 0 20 20">
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                              ))}
                            </div>

                            {/* Testimonial Text */}
                            <p
                              className="text-base lg:text-lg xl:text-[20px] text-gray-600 leading-relaxed lg:leading-[1.5em] mb-6 lg:mb-[72px] -mt-[0.4em] line-clamp-4 lg:line-clamp-none"
                              style={{ fontFamily: '"DM Sans", sans-serif' }}
                            >
                              "{testimonial.text}"
                            </p>

                            {/* Profile */}
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0 rounded-full overflow-hidden">
                                <img
                                  alt={testimonial.name}
                                  src={testimonial.image}
                                  className="w-12 h-12 lg:w-auto lg:h-auto"
                                />
                              </div>
                              <div>
                                <h3
                                  className="text-base lg:text-lg xl:text-[18px] font-medium text-gray-900 mb-1 -mt-[0.32em] -mb-[0.3em]"
                                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                                >
                                  {testimonial.name}
                                </h3>
                                <p
                                  className="text-sm lg:text-[14px] text-gray-600 mt-[5px] -mb-[0.5em]"
                                  style={{ fontFamily: '"DM Sans", sans-serif' }}
                                >
                                  {testimonial.position}
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* Custom Controls */}
                    <div className="mt-6 lg:mt-8 flex items-center border border-gray-300 rounded-3xl lg:rounded-[40px] p-2 lg:p-[5px] max-w-full lg:max-w-[662px]">
                      {/* Previous Button */}
                      <button className="testimonial-prev flex-shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Pagination */}
                      <div className="testimonial-pagination flex-1 flex items-center justify-center gap-1"></div>

                      {/* Next Button */}
                      <button className="testimonial-next flex-shrink-0 w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TestimonialsSection;