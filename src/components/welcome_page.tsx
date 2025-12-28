// /* eslint-disable react-hooks/rules-of-hooks */
// // WelcomePage.tsx
// import { Building2, TrendingUp, Cpu, ArrowRight, Sparkles, RefreshCw, Award, Users, Globe, Target, Zap, CheckCircle, ChevronUp } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import logo from "../assets/images/hously-logo.png";
// import { Link } from 'react-router-dom';

// interface WelcomePageProps {
//   onSectorClick: (sectorId: string) => void;
// }

// function WelcomePage({ onSectorClick }: WelcomePageProps) {
//   const [showNewBrand, setShowNewBrand] = useState(false);
//   const [parallaxOffset, setParallaxOffset] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [visibleStats, setVisibleStats] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
//   const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeModal, setActiveModal] = useState<null | 'real-estate' | 'finance'>(null);


//   useEffect(() => {
//     setVisibleCards(new Array(sectors.length).fill(true));
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowNewBrand(true);
//     }, 2000);

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setParallaxOffset(scrollY * 0.5);
//       const scrolled = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//       setScrollProgress(scrolled);
//       setShowScrollTop(scrollY > 300);

//       if (statsRef.current) {
//         const rect = statsRef.current.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.75) {
//           setVisibleStats(true);
//         }
//       }

//       // Check card visibility for animation
//       cardsRef.current.forEach((card, index) => {
//         if (card) {
//           const rect = card.getBoundingClientRect();
//           if (rect.top < window.innerHeight * 0.85) {
//             setVisibleCards(prev => {
//               const newState = [...prev];
//               newState[index] = true;
//               return newState;
//             });
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     // Initial check
//     setTimeout(handleScroll, 100);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const sectors = [
//     {
//       id: 'real-estate',
//       title: 'Real Estate',
//       description: 'Premium residential and commercial properties. Building dreams, creating landmarks.',
//       icon: Building2,
//       color: 'from-blue-500 to-cyan-500',
//       gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
//       hoverGradient: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
//       image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
//       features: ['Property Development', 'Commercial Spaces', 'Residential Projects', 'Investment Opportunities']
//     },
//     {
//       id: 'finance',
//       title: 'Finance',
//       description: 'Comprehensive financial solutions and investment services. Empowering financial freedom.',
//       icon: TrendingUp,
//       color: 'from-emerald-500 to-teal-500',
//       gradient: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)',
//       hoverGradient: 'linear-gradient(135deg, #059669 0%, #0f766e 100%)',
//       image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
//       features: ['Investment Banking', 'Wealth Management', 'Financial Planning', 'Market Analysis']
//     },
//     {
//       id: 'it-tech',
//       title: 'IT & Technology',
//       description: 'Cutting-edge technology solutions and digital transformation. Innovating tomorrow.',
//       icon: Cpu,
//       color: 'from-orange-500 to-amber-500',
//       gradient: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
//       hoverGradient: 'linear-gradient(135deg, #ea580c 0%, #d97706 100%)',
//       image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
//       features: ['Software Development', 'Digital Solutions', 'Tech Consulting', 'Innovation Labs']
//     }
//   ];

//   const stats = [
//     { value: '12+', label: 'Years Combined Experience', icon: Award },
//     { value: '100+', label: 'Projects Completed', icon: Target },
//     { value: '500+', label: 'Happy Clients', icon: Users },
//     { value: '3', label: 'Industry Sectors', icon: Globe }
//   ];

//   const timeline = [
//     { year: 'The Beginning', title: 'AAKAR INFRA SERVICES', desc: 'Started with a vision in infrastructure development' },
//     { year: 'Evolution', title: 'Growth & Expansion', desc: 'Diversified into multiple sectors and services' },
//     { year: 'Today', title: 'HOUSLY FINNTECH REALTY', desc: 'A comprehensive multi-sector conglomerate' }
//   ];

//   const features = [
//     { icon: Zap, title: 'Innovative Solutions', desc: 'Cutting-edge approaches to modern challenges' },
//     { icon: Award, title: 'Award-Winning Service', desc: 'Recognized excellence across industries' },
//     { icon: CheckCircle, title: 'Proven Track Record', desc: 'Decades of successful project delivery' },
//     { icon: Globe, title: 'Global Presence', desc: 'Serving clients across multiple regions' }
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
//         <div
//           className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       {/* Logo */}
//       <div className="fixed top-4 left-4 z-40 animate-fade-in sm:top-6 sm:left-6">
//         <img
//           src={logo}
//           alt="Hously Logo"
//           className="h-20 w-auto object-contain drop-shadow-2xl"
//         />
//       </div>

//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 sm:opacity-40"></div>

//       {/* Floating Particles - Restored from first code */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-10 left-5 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
//         <div className="absolute top-20 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-40 left-20 w-2 h-2 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-60 right-40 w-3 h-3 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
//         <div className="absolute top-80 left-60 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
//         <div className="absolute bottom-40 right-20 w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
//         <div className="absolute bottom-60 left-40 w-3 h-3 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '1.8s' }}></div>
//       </div>

//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{ transform: `translateY(${parallaxOffset}px)` }}
//       >
//         <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
//           {/* Hero Section */}
//           <div className="text-center mb-12 animate-fade-in px-2">
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg mb-4 sm:mb-8 border border-slate-200 animate-slide-down max-w-xs sm:max-w-none mx-auto">
//               <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 animate-spin-slow" />
//               <span className="text-xs sm:text-sm text-slate-600 font-medium">Formerly Known as AAKAR INFRA SERVICES</span>
//             </div>

//             {/* Brand Transition */}
//             <div className="mb-6 sm:mb-8 relative h-20 sm:h-24 md:h-32 flex items-center justify-center px-2">
//               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showNewBrand ? 'opacity-0 scale-75 blur-sm' : 'opacity-100 scale-100'}`}>
//                 <div className="text-center">
//                   <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-400 mb-1 sm:mb-2 flex items-center justify-center gap-2">
//                     <Building2 className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" />
//                     <span>AAKAR</span>
//                   </div>
//                   <div className="text-xs sm:text-lg md:text-xl text-slate-400 font-light tracking-wider">INFRA SERVICES</div>
//                 </div>
//               </div>

//               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showNewBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-125 blur-sm'}`}>
//                 <RefreshCw className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-500 ${showNewBrand ? 'animate-spin-once' : ''}`} />
//               </div>

//               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-1000 ${showNewBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-75 blur-sm'}`}>
//                 <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent leading-tight animate-gradient px-4 text-center">
//                   HOUSLY FINNTECH REALTY
//                 </h1>
//               </div>
//             </div>

//             {/* Tagline */}
//             <div className="max-w-3xl mx-auto mb-6 px-2 sm:px-4">
//               <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-3">
//                 Evolved. Expanded. Empowered.
//               </p>
//               <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
//                 We've transformed from AAKAR INFRA SERVICES to HOUSLY FINNTECH REALTY,
//                 embracing a bold vision that spans across Real Estate, Financial Services, and Technology.
//               </p>
//             </div>

//             {/* Features */}
//             <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 px-2">
//               {['Three Divisions', 'One Vision', 'Limitless Possibilities'].map((text, i) => (
//                 <div key={i} className="flex items-center gap-1 sm:gap-2">
//                   <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Sector Cards - Enhanced with better animations */}
//           <div className="max-w-7xl mx-auto px-2 sm:px-4">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 text-slate-800">
//               Explore Our Divisions
//             </h2>
//             <p className="text-xs sm:text-sm md:text-base text-center text-slate-600 mb-6 sm:mb-8">
//               Click on any division to access specialized services and solutions
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//               {sectors.map((sector, index) => {
//                 const Icon = sector.icon;
//                 return (
//                   <div
//                     key={sector.id}
//                     // onClick={() => onSectorClick(sector.id)}
//                     onClick={() => {
//                       if (sector.id === 'real-estate' || sector.id === 'finance') {
//                         setActiveModal(sector.id);
//                       } else {
//                         onSectorClick(sector.id); // IT & Technology
//                       }
//                     }}

//                     onMouseEnter={() => setHoveredCard(sector.id)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="group cursor-pointer transform transition-all duration-500"
//                     style={{
//                       animationDelay: `${index * 200 + 2500}ms`,
//                       opacity: visibleCards[index] ? 1 : 0,
//                       transform: visibleCards[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
//                       transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
//                     }}
//                   >
//                     <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-slate-200 hover:border-transparent group-hover:-translate-y-2">
//                       {/* Animated Background Layer */}
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         <div
//                           className="absolute inset-0"
//                           style={{
//                             background: sector.gradient,
//                             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//                             transition: 'clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
//                           }}
//                         ></div>
//                       </div>

//                       {/* Image Section */}
//                       <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
//                         <img
//                           src={sector.image}
//                           alt={sector.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                           loading="lazy"
//                         />
                        
//                         {/* Floating Icon */}
//                         <div className="absolute top-4 right-4 z-20">
//                           <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
//                             <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${sector.color.replace('from-', 'text-').replace(' to-', '-500')}`} />
//                           </div>
//                         </div>

//                         {/* Animated Overlay */}
//                         <div className={`absolute inset-0 ${sector.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
//                       </div>

//                       {/* Content Section */}
//                       <div className="relative p-4 sm:p-6 md:p-8">
//                         {/* Floating Badge */}
//                         <div className={`absolute -top-4 sm:-top-6 left-4 sm:left-8 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${sector.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
//                           <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//                         </div>

//                         <div className="pt-4 sm:pt-6 md:pt-8">
//                           <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-800 group-hover:text-white transition-colors duration-300">
//                             {sector.title}
//                           </h3>

//                           <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors duration-300 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
//                             {sector.description}
//                           </p>

//                           {/* Features List - Appears on hover */}
//                           <div className="mb-4 sm:mb-6 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
//                             <div className="grid grid-cols-2 gap-2">
//                               {sector.features.map((feature, i) => (
//                                 <div key={i} className="flex items-center gap-1">
//                                   <div className={`w-1 h-1 rounded-full ${sector.color.replace('from-', 'bg-').replace(' to-', '-500')}`}></div>
//                                   <span className="text-xs text-slate-600 group-hover:text-slate-300 transition-colors duration-300">
//                                     {feature}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           {/* CTA Button */}
//                           <div className="flex items-center text-blue-600 font-semibold group-hover:text-white transition-all duration-300">
//                             <span className="text-sm sm:text-base">Explore Division</span>
//                             <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
//                           </div>
//                         </div>
//                       </div>

//                       {/* Animated Border Bottom */}
//                       <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${sector.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

//                       {/* Glow Effect */}
//                       <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-transparent group-hover:ring-white/30 transition-all duration-500 pointer-events-none"></div>
                      
//                       {/* Particle Effects on Hover */}
//                       {hoveredCard === sector.id && (
//                         <>
//                           <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
//                           <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
//                           <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Stats Section */}
//          <div ref={statsRef} className="mt-20 sm:mt-32 mb-16 sm:mb-20 px-2 sm:px-4">
//   <div className="text-center mb-12">
//     <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">
//       Our Impact in Numbers
//     </h2>
//     <p className="text-sm sm:text-base text-slate-600">
//       Excellence measured through achievements
//     </p>
//   </div>
  
//   <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
//     {stats.map((stat, index) => {
//       const Icon = stat.icon;
//       const [isHovered, setIsHovered] = useState(false);
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       const [count, setCount] = useState(0);
      
//       useEffect(() => {
//         if (visibleStats) {
//           // Animate number counting
//           const targetValue = parseInt(stat.value);
//           if (isNaN(targetValue)) return;
          
//           const duration = 1500;
//           const steps = 60;
//           const increment = targetValue / steps;
//           let current = 0;
          
//           const timer = setInterval(() => {
//             current += increment;
//             if (current >= targetValue) {
//               setCount(targetValue);
//               clearInterval(timer);
//             } else {
//               setCount(Math.floor(current));
//             }
//           }, duration / steps);
          
//           return () => clearInterval(timer);
//         }
//       }, [visibleStats, stat.value]);
      
//       return (
//         <div
//           key={index}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           className={`relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200/50
//             shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group
//             ${visibleStats ? 'animate-scale-in' : 'opacity-0'}`}
//           style={{
//             animationDelay: `${index * 150}ms`,
//             transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
//           }}
//         >
//           {/* Animated Background Gradient */}
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
//             <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
//             <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{ transitionDelay: '100ms' }}></div>
//           </div>
          
//           {/* Floating Particles on Hover */}
//           {/* {isHovered && (
//             <>
//               <div className="absolute top-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
//               <div className="absolute top-4 right-3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '0.2s' }}></div>
//               <div className="absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0.4s' }}></div>
//               <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '0.6s' }}></div>
//             </>
//           )} */}
          
//           {/* Icon Container with Glow Effect */}
//           <div className="relative flex justify-center mb-3 sm:mb-4">
//             <div className="relative">
//               {/* Outer Glow */}
//               <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
              
//               {/* Icon Background */}
//               <div className={`relative p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl shadow-lg
//                 transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
//                 <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//               </div>
              
//               {/* Pulsing Ring */}
//               <div className={`absolute inset-0 border-2 border-blue-400/50 rounded-lg sm:rounded-xl ${isHovered ? 'animate-ping-slow' : ''}`}></div>
//             </div>
//           </div>
          
//           {/* Animated Number Counter */}
// <div className="flex flex-col items-center text-center">
//             <div className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-500">
//               {stat.value.includes('+') ? (
//                 <>
//                   <span className="inline-block min-w-[2ch] text-center">
//                     {visibleStats ? count : 0}
//                   </span>
//                   <span>+</span>
//                 </>
//               ) : stat.value}
//             </div>
            
//             {/* Animated Underline */}
//             <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
//           </div>
          
//           {/* Label with Hover Effect */}
//           <div className="relative flex justify-center">
//   <div className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-tight px-2 text-center">
//     {stat.label}
//   </div>

//   {/* Label Background on Hover */}
//   <div className="absolute inset-x-0 -inset-y-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
// </div>

          
//           {/* Corner Accents */}
//           <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-400/30 group-hover:border-blue-500/70 transition-colors duration-500"></div>
//           <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/30 group-hover:border-cyan-500/70 transition-colors duration-500"></div>
//           <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400/30 group-hover:border-blue-500/70 transition-colors duration-500"></div>
//           <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/30 group-hover:border-cyan-500/70 transition-colors duration-500"></div>
          
//           {/* Pulse Effect on Hover */}
//           {isHovered && (
//             <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-2 ring-blue-400/30 animate-pulse pointer-events-none"></div>
//           )}
//         </div>
//       );
//     })}
//   </div>
// </div>

//           {/* Features Section */}
//           <div className="mt-16 sm:mt-32 mb-16 sm:mb-20 px-2 sm:px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">Why Choose Us</h2>
//               <p className="text-sm sm:text-base text-slate-600">What sets us apart from the rest</p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
//               {features.map((feature, index) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="group bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 animate-fade-in"
//                     style={{ animationDelay: `${index * 150 + 3500}ms` }}
//                   >
//                     <div className="mb-3 sm:mb-4 inline-flex p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                       <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//                     </div>
//                     <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">{feature.title}</h3>
//                     <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Timeline Section */}
//           <div className="mt-16 sm:mt-32 mb-16 sm:mb-20 px-2 sm:px-4">
//             <div className="text-center mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">Our Transformation Journey</h2>
//               <p className="text-sm sm:text-base text-slate-600">From vision to Realty</p>
//             </div>
//             <div className="max-w-4xl mx-auto">
//               <div className="relative">
//                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 hidden sm:block"></div>
//                 {timeline.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? 'sm:pr-1/2 sm:text-right' : 'sm:pl-1/2'} animate-fade-in`}
//                     style={{ animationDelay: `${index * 300 + 4000}ms` }}
//                   >
//                     <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:ml-auto sm:pr-8' : 'sm:pl-8'}`}>
//                       <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
//                         <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
//                           {item.year}
//                         </div>
//                         <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2">{item.title}</h3>
//                         <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
//                       </div>
//                     </div>
//                     <div className="absolute left-1/2 top-6 sm:top-8 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 sm:border-4 border-white shadow-lg hidden sm:block"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div className="mt-16 sm:mt-32 mb-0 w-full px-0">
//             <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
//                 <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
//               </div>

//               <div className="relative z-10 container mx-auto max-w-6xl">
//                 <div className="text-center mb-8 sm:mb-10">
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
//                     Our Journey Forward
//                   </h2>
//                   <p className="text-sm sm:text-base text-blue-100">A transformation story of vision and innovation</p>
//                 </div>

//                 <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 items-center mb-6 sm:mb-8">
//                   <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-500">
//                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                       <div className="p-2 sm:p-3 bg-slate-700/50 rounded-lg sm:rounded-xl">
//                         <Building2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-300" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-300">AAKAR INFRA SERVICES</h3>
//                         <p className="text-blue-200 text-xs">Where it began</p>
//                       </div>
//                     </div>
//                     <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
//                       Built on excellence and trust, establishing a legacy of quality infrastructure.
//                     </p>
//                   </div>

//                   <div className="flex justify-center my-2 sm:my-0">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
//                       <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-2 sm:p-3 md:p-4 rounded-full">
//                         <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400/30 shadow-xl sm:shadow-2xl transition-all duration-500">
//                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                       <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl shadow-lg">
//                         <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white animate-spin-slow" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">HOUSLY FINNTECH REALTY</h3>
//                         <p className="text-cyan-200 text-xs">The future is now</p>
//                       </div>
//                     </div>
//                     <p className="text-white text-xs sm:text-sm leading-relaxed">
//                       Expanding horizons across real estate, finance, and technology.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 text-center">
//                   <blockquote className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 italic leading-relaxed">
//                     "Building on our strong foundation, we're creating a future where real estate, finance, and technology converge to deliver unparalleled value."
//                   </blockquote>
//                   <p className="text-blue-200 text-sm">
//                     Transforming industries and shaping the future together.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//        <footer className="bg-slate-900 border-t border-slate-800">
//   <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
//     <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
//       <p className="text-slate-400 text-center sm:text-left">
//         © {new Date().getFullYear()} Hously Finntech Realty. All rights reserved.
//       </p>

//       <div className="flex gap-4 sm:gap-6">
//         <Link
//           to="/privacy-policy"
//           className="text-slate-400 hover:text-white transition-colors duration-300"
//         >
//           Privacy Policy
//         </Link>
//         <Link
//           to="/terms-of-service"
//           className="text-slate-400 hover:text-white transition-colors duration-300"
//         >
//           Terms of Service
//         </Link>
//         <Link
//           to="/cookie-policy"
//           className="text-slate-400 hover:text-white transition-colors duration-300"
//         >
//           Cookie Policy
//         </Link>
//       </div>
//     </div>
//   </div>
// </footer>


//         {/* Scroll to Top Button */}
//         <button
//           onClick={scrollToTop}
//           className={`fixed right-4 bottom-4 sm:right-8 sm:bottom-8 z-50 p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full shadow-xl hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all duration-300 ${
//             showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
//           }`}
//           aria-label="Scroll to top"
//         >
//           <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//         </button>
//         {/* Real Estate Modal */}
//         {activeModal === 'real-estate' && (
//           <ComingSoonModal
//             title="Real Estate Division"
//             description="Premium residential and commercial property solutions."
//             services={[
//               'Residential Projects',
//               'Commercial Spaces',
//               'Property Management',
//               'Real Estate Consulting',
//             ]}
//             onClose={() => setActiveModal(null)}
//           />
//         )}

//         {/* Finance Modal */}
//         {activeModal === 'finance' && (
//           <ComingSoonModal
//             title="Finance Division"
//             description="Smart financial solutions and investment services."
//             services={[
//               'Investment Advisory',
//               'Wealth Management',
//               'Financial Planning',
//               'Portfolio Management',
//             ]}
//             onClose={() => setActiveModal(null)}
//           />
//         )}

//       </div>

//       {/* Add custom animations to global CSS or use inline styles */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         @keyframes spin-once {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         .animate-spin-once {
//           animation: spin-once 1s ease-in-out;
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 6s ease infinite;
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
        
//         @keyframes slide-down {
//           from { transform: translateY(-20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-slide-down {
//           animation: slide-down 0.6s ease-out;
//         }
        
//         @keyframes scale-in {
//           from { transform: scale(0.8); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         .animate-scale-in {
//           animation: scale-in 0.5s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }
// const ComingSoonModal = ({
//   title,
//   description,
//   services,
//   onClose,
// }: {
//   title: string;
//   description: string;
//   services: string[];
//   onClose: () => void;
// }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 animate-scale-in">
//         <div className="p-6 text-center">

//           <h2 className="text-2xl font-bold text-slate-800 mb-2">
//             {title}
//           </h2>

//           <p className="text-slate-600 mb-4">{description}</p>

//           <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-4 mb-6">
//             <p className="font-semibold">Website Under Development</p>
//             <p className="text-sm opacity-90">Launching Soon 🚀</p>
//           </div>

//           <div className="text-left mb-6">
//             <h4 className="font-semibold mb-2 text-slate-700">
//               Our Services
//             </h4>

//             <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
//               {services.map((s, i) => (
//                 <li key={i} className="flex items-center gap-2">
//                   <span className="text-green-500">✔</span> {s}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <button
//             onClick={onClose}
//             className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             Close
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };


// export default WelcomePage;

// import { Building2, TrendingUp, Cpu, ArrowRight, Sparkles, RefreshCw, Award, Users, Globe, Target, Zap, CheckCircle, ChevronUp } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';
// import logo from "../assets/images/hously-logo.png";
// interface WelcomePageProps {
//   onSectorClick: (sectorId: string) => void;
// }

// function WelcomePage({ onSectorClick }: WelcomePageProps) {
//   const [showNewBrand, setShowNewBrand] = useState(false);
//   const [parallaxOffset, setParallaxOffset] = useState(0);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [visibleStats, setVisibleStats] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
//   const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const [activeModal, setActiveModal] = useState<null | 'real-estate' | 'finance'>(null);

//   const sectors = [
//     {
//       id: 'real-estate',
//       title: 'Real Estate',
//       description: 'Premium residential and commercial properties. Building dreams, creating landmarks.',
//       icon: Building2,
//       color: 'from-blue-500 to-cyan-500',
//       gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
//       hoverGradient: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
//       image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
//       features: ['Property Development', 'Commercial Spaces', 'Residential Projects', 'Investment Opportunities']
//     },
//     {
//       id: 'finance',
//       title: 'Finance',
//       description: 'Comprehensive financial solutions and investment services. Empowering financial freedom.',
//       icon: TrendingUp,
//       color: 'from-emerald-500 to-teal-500',
//       gradient: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)',
//       hoverGradient: 'linear-gradient(135deg, #059669 0%, #0f766e 100%)',
//       image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
//       features: ['Investment Banking', 'Wealth Management', 'Financial Planning', 'Market Analysis']
//     },
//     {
//       id: 'it-tech',
//       title: 'IT & Technology',
//       description: 'Cutting-edge technology solutions and digital transformation. Innovating tomorrow.',
//       icon: Cpu,
//       color: 'from-orange-500 to-amber-500',
//       gradient: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
//       hoverGradient: 'linear-gradient(135deg, #ea580c 0%, #d97706 100%)',
//       image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
//       features: ['Software Development', 'Digital Solutions', 'Tech Consulting', 'Innovation Labs']
//     }
//   ];

//   const stats = [
//     { value: '12+', label: 'Years Combined Experience', icon: Award },
//     { value: '100+', label: 'Projects Completed', icon: Target },
//     { value: '500+', label: 'Happy Clients', icon: Users },
//     { value: '3', label: 'Industry Sectors', icon: Globe }
//   ];

//   const timeline = [
//     { year: 'The Beginning', title: 'AAKAR INFRA SERVICES', desc: 'Started with a vision in infrastructure development' },
//     { year: 'Evolution', title: 'Growth & Expansion', desc: 'Diversified into multiple sectors and services' },
//     { year: 'Today', title: 'HOUSLY FINNTECH REALTY', desc: 'A comprehensive multi-sector conglomerate' }
//   ];

//   const features = [
//     { icon: Zap, title: 'Innovative Solutions', desc: 'Cutting-edge approaches to modern challenges' },
//     { icon: Award, title: 'Award-Winning Service', desc: 'Recognized excellence across industries' },
//     { icon: CheckCircle, title: 'Proven Track Record', desc: 'Decades of successful project delivery' },
//     { icon: Globe, title: 'Global Presence', desc: 'Serving clients across multiple regions' }
//   ];

//   useEffect(() => {
//     setVisibleCards(new Array(sectors.length).fill(false));
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowNewBrand(true);
//     }, 2000);

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setParallaxOffset(scrollY * 0.5);
//       const scrolled = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
//       setScrollProgress(scrolled);
//       setShowScrollTop(scrollY > 300);

//       if (statsRef.current) {
//         const rect = statsRef.current.getBoundingClientRect();
//         if (rect.top < window.innerHeight * 0.75) {
//           setVisibleStats(true);
//         }
//       }

//       cardsRef.current.forEach((card, index) => {
//         if (card) {
//           const rect = card.getBoundingClientRect();
//           if (rect.top < window.innerHeight * 0.85) {
//             setVisibleCards(prev => {
//               const newState = [...prev];
//               newState[index] = true;
//               return newState;
//             });
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     setTimeout(handleScroll, 100);

//     return () => {
//       clearTimeout(timer);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
//       <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
//         <div
//           className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       <div className="fixed top-3 left-3 z-40 animate-fade-in sm:top-4 sm:left-4 md:top-6 md:left-6">
//               {/* Logo */}
//                  <div className="fixed top-4 left-4 z-40 animate-fade-in sm:top-6 sm:left-6">
//                   <img
//                     src={logo}
//                   alt="Hously Logo"
//                   className="h-20 w-auto object-contain drop-shadow-2xl"
//                />
//                 </div>
//       </div>

//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 sm:opacity-40"></div>

//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[0, 1, 2, 3, 4, 5, 6].map((i) => (
//           <div
//             key={i}
//             className={`absolute w-2 h-2 rounded-full animate-float ${i % 4 === 0 ? 'bg-blue-400' : i % 4 === 1 ? 'bg-cyan-400' : i % 4 === 2 ? 'bg-emerald-400' : 'bg-orange-400'
//               }`}
//             style={{
//               top: `${10 + i * 15}%`,
//               left: i % 2 === 0 ? `${5 + i * 10}%` : 'auto',
//               right: i % 2 === 1 ? `${10 + i * 5}%` : 'auto',
//               animationDelay: `${i * 0.5}s`
//             }}
//           ></div>
//         ))}
//       </div>

//       <div
//         className="absolute inset-0 opacity-10 pointer-events-none"
//         style={{ transform: `translateY(${parallaxOffset}px)` }}
//       >
//         <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="relative z-10">
//         <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
//           <div className="text-center mb-8 sm:mb-12 animate-fade-in px-2">
//             <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg mb-4 sm:mb-8 border border-slate-200 animate-slide-down max-w-xs sm:max-w-none mx-auto">
//               <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 animate-spin-slow" />
//               <span className="text-xs sm:text-sm text-slate-600 font-medium">Formerly Known as AAKAR INFRA SERVICES</span>
//             </div>

//             <div className="mb-6 sm:mb-8 relative h-20 sm:h-24 md:h-32 flex items-center justify-center px-2">
//               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showNewBrand ? 'opacity-0 scale-75 blur-sm' : 'opacity-100 scale-100'}`}>
//                 <div className="text-center">
//                   <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-400 mb-1 sm:mb-2 flex items-center justify-center gap-2">
//                     <Building2 className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" />
//                     <span>AAKAR</span>
//                   </div>
//                   <div className="text-xs sm:text-lg md:text-xl text-slate-400 font-light tracking-wider">INFRA SERVICES</div>
//                 </div>
//               </div>

//               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showNewBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-125 blur-sm'}`}>
//                 <RefreshCw className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-500 ${showNewBrand ? 'animate-spin-once' : ''}`} />
//               </div>

//               <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-1000 ${showNewBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-75 blur-sm'}`}>
//                 <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent leading-tight animate-gradient px-4 text-center">
//                   HOUSLY FINNTECH REALTY
//                 </h1>
//               </div>
//             </div>

//             <div className="max-w-3xl mx-auto mb-6 px-2 sm:px-4">
//               <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-3">
//                 Evolved. Expanded. Empowered.
//               </p>
//               <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
//                 We've transformed from AAKAR INFRA SERVICES to HOUSLY FINNTECH REALTY,
//                 embracing a bold vision that spans across Real Estate, Financial Services, and Technology.
//               </p>
//             </div>

//             <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 px-2">
//               {['Three Divisions', 'One Vision', 'Limitless Possibilities'].map((text, i) => (
//                 <div key={i} className="flex items-center gap-1 sm:gap-2">
//                   <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
//                   <span>{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="max-w-7xl mx-auto px-2 sm:px-4">
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 text-slate-800">
//               Explore Our Divisions
//             </h2>
//             <p className="text-xs sm:text-sm md:text-base text-center text-slate-600 mb-6 sm:mb-8">
//               Click on any division to access specialized services and solutions
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
//               {sectors.map((sector, index) => {
//                 const Icon = sector.icon;
//                 return (
//                   <div
//                     key={sector.id}
//                     ref={el => cardsRef.current[index] = el}
//                     onClick={() => {
//                       if (sector.id === 'real-estate' || sector.id === 'finance') {
//                         setActiveModal(sector.id);
//                       } else {
//                         onSectorClick(sector.id);
//                       }
//                     }}
//                     onMouseEnter={() => setHoveredCard(sector.id)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                     className="group cursor-pointer transform transition-all duration-500"
//                     style={{
//                       opacity: visibleCards[index] ? 1 : 0,
//                       transform: visibleCards[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
//                       transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
//                     }}
//                   >
//                     <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-slate-200 hover:border-transparent group-hover:-translate-y-2">
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                         <div
//                           className="absolute inset-0"
//                           style={{
//                             background: sector.gradient,
//                             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//                             transition: 'clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
//                           }}
//                         ></div>
//                       </div>

//                       <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
//                         <img
//                           src={sector.image}
//                           alt={sector.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                           loading="lazy"
//                         />

//                         <div className="absolute top-4 right-4 z-20">
//                           <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
//                             <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${sector.color.replace('from-', 'text-').split(' ')[0]}`} />
//                           </div>
//                         </div>

//                         <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
//                       </div>

//                       <div className="relative p-4 sm:p-6 md:p-8">
//                         <div className={`absolute -top-4 sm:-top-6 left-4 sm:left-8 p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${sector.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
//                           <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//                         </div>

//                         <div className="pt-4 sm:pt-6 md:pt-8">
//                           <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-800 group-hover:text-white transition-colors duration-300">
//                             {sector.title}
//                           </h3>

//                           <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors duration-300 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
//                             {sector.description}
//                           </p>

//                           <div className="mb-4 sm:mb-6 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
//                             <div className="grid grid-cols-2 gap-2">
//                               {sector.features.map((feature, i) => (
//                                 <div key={i} className="flex items-center gap-1">
//                                   <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${sector.color}`}></div>
//                                   <span className="text-xs text-slate-600 group-hover:text-slate-300 transition-colors duration-300">
//                                     {feature}
//                                   </span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           <div className="flex items-center text-blue-600 font-semibold group-hover:text-white transition-all duration-300">
//                             <span className="text-sm sm:text-base">Explore Division</span>
//                             <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
//                           </div>
//                         </div>
//                       </div>

//                       <div className={`h-1 sm:h-1.5 bg-gradient-to-r ${sector.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

//                       <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-transparent group-hover:ring-white/30 transition-all duration-500 pointer-events-none"></div>

//                       {hoveredCard === sector.id && (
//                         <>
//                           <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
//                           <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
//                           <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div ref={statsRef} className="mt-12 sm:mt-20 md:mt-32 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4">
//             <div className="text-center mb-8 sm:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">
//                 Our Impact in Numbers
//               </h2>
//               <p className="text-sm sm:text-base text-slate-600">
//                 Excellence measured through achievements
//               </p>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <StatCard key={index} stat={stat} Icon={Icon} index={index} visibleStats={visibleStats} />
//                 );
//               })}
//             </div>
//           </div>

//           <div className="mt-12 sm:mt-16 md:mt-32 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4">
//             <div className="text-center mb-8 sm:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">Why Choose Us</h2>
//               <p className="text-sm sm:text-base text-slate-600">What sets us apart from the rest</p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
//               {features.map((feature, index) => {
//                 const Icon = feature.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="group bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 animate-fade-in"
//                     style={{ animationDelay: `${index * 150 + 3500}ms` }}
//                   >
//                     <div className="mb-3 sm:mb-4 inline-flex p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//                       <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//                     </div>
//                     <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">{feature.title}</h3>
//                     <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="mt-12 sm:mt-16 md:mt-32 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4">
//             <div className="text-center mb-8 sm:mb-12">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-800">Our Transformation Journey</h2>
//               <p className="text-sm sm:text-base text-slate-600">From vision to reality</p>
//             </div>
//             <div className="max-w-4xl mx-auto">
//               <div className="relative">
//                 <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 hidden sm:block"></div>
//                 {timeline.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`relative mb-8 sm:mb-12 ${index % 2 === 0 ? 'sm:pr-1/2 sm:text-right' : 'sm:pl-1/2'} animate-fade-in`}
//                     style={{ animationDelay: `${index * 300 + 4000}ms` }}
//                   >
//                     <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:ml-auto sm:pr-8' : 'sm:pl-8'}`}>
//                       <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
//                         <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
//                           {item.year}
//                         </div>
//                         <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2">{item.title}</h3>
//                         <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
//                       </div>
//                     </div>
//                     <div className="absolute left-1/2 top-6 sm:top-8 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 sm:border-4 border-white shadow-lg hidden sm:block"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="mt-12 sm:mt-16 md:mt-32 mb-0 w-full px-0">
//             <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
//                 <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
//               </div>

//               <div className="relative z-10 container mx-auto max-w-6xl">
//                 <div className="text-center mb-8 sm:mb-10">
//                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
//                     Our Journey Forward
//                   </h2>
//                   <p className="text-sm sm:text-base text-blue-100">A transformation story of vision and innovation</p>
//                 </div>

//                 <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 items-center mb-6 sm:mb-8">
//                   <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 w-full">
//                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                       <div className="p-2 sm:p-3 bg-slate-700/50 rounded-lg sm:rounded-xl">
//                         <Building2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-slate-300" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-300">AAKAR INFRA SERVICES</h3>
//                         <p className="text-blue-200 text-xs">Where it began</p>
//                       </div>
//                     </div>
//                     <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
//                       Built on excellence and trust, establishing a legacy of quality infrastructure.
//                     </p>
//                   </div>

//                   <div className="flex justify-center my-2 sm:my-0">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
//                       <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-2 sm:p-3 md:p-4 rounded-full">
//                         <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-400/30 shadow-xl sm:shadow-2xl transition-all duration-500 w-full">
//                     <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                       <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl shadow-lg">
//                         <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white animate-spin-slow" />
//                       </div>
//                       <div>
//                         <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">HOUSLY FINNTECH REALTY</h3>
//                         <p className="text-cyan-200 text-xs">The future is now</p>
//                       </div>
//                     </div>
//                     <p className="text-white text-xs sm:text-sm leading-relaxed">
//                       Expanding horizons across real estate, finance, and technology.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 text-center">
//                   <blockquote className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 italic leading-relaxed">
//                     "Building on our strong foundation, we're creating a future where real estate, finance, and technology converge to deliver unparalleled value."
//                   </blockquote>
//                   <p className="text-blue-200 text-sm">
//                     Transforming industries and shaping the future together.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <footer className="bg-slate-900 border-t border-slate-800">
//           <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
//             <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
//               <p className="text-slate-400 text-center sm:text-left">
//                 © {new Date().getFullYear()} Hously Finntech Realty. All rights reserved.
//               </p>

//               <div className="flex gap-4 sm:gap-6">
//                 <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors duration-300">
//                   Privacy Policy
//                 </a>
//                 <a href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors duration-300">
//                   Terms of Service
//                 </a>
//                 <a href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors duration-300">
//                   Cookie Policy
//                 </a>
//               </div>
//             </div>
//           </div>
//         </footer>

//         <button
//           onClick={scrollToTop}
//           className={`fixed right-4 bottom-4 sm:right-8 sm:bottom-8 z-50 p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full shadow-xl hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
//             }`}
//           aria-label="Scroll to top"
//         >
//           <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
//         </button>

//         {activeModal === 'real-estate' && (
//           <ComingSoonModal
//             title="Real Estate Division"
//             description="Premium residential and commercial property solutions."
//             services={[
//               'Residential Projects',
//               'Commercial Spaces',
//               'Property Management',
//               'Real Estate Consulting',
//             ]}
//             onClose={() => setActiveModal(null)}
//           />
//         )}

//         {activeModal === 'finance' && (
//           <ComingSoonModal
//             title="Finance Division"
//             description="Smart financial solutions and investment services."
//             services={[
//               'Investment Advisory',
//               'Wealth Management',
//               'Financial Planning',
//               'Portfolio Management',
//             ]}
//             onClose={() => setActiveModal(null)}
//           />
//         )}
//       </div>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(5deg); }
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
        
//         @keyframes spin-once {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         .animate-spin-once {
//           animation: spin-once 1s ease-in-out;
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 3s ease-in-out infinite;
//         }
        
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 6s ease infinite;
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
        
//         @keyframes slide-down {
//           from { transform: translateY(-20px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .animate-slide-down {
//           animation: slide-down 0.6s ease-out;
//         }
        
//         @keyframes scale-in {
//           from { transform: scale(0.8); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         .animate-scale-in {
//           animation: scale-in 0.5s ease-out forwards;
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 8s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// const StatCard = ({ stat, Icon, index, visibleStats }: any) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (visibleStats) {
//       const targetValue = parseInt(stat.value);
//       if (isNaN(targetValue)) return;

//       const duration = 1500;
//       const steps = 60;
//       const increment = targetValue / steps;
//       let current = 0;

//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= targetValue) {
//           setCount(targetValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(current));
//         }
//       }, duration / steps);

//       return () => clearInterval(timer);
//     }
//   }, [visibleStats, stat.value]);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`relative bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200/50
//         shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group
//         ${visibleStats ? 'animate-scale-in' : 'opacity-0'}`}
//       style={{
//         animationDelay: `${index * 150}ms`,
//         transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
//       }}
//     >
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
//         <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{ transitionDelay: '100ms' }}></div>
//       </div>

//       <div className="relative flex justify-center mb-3 sm:mb-4">
//         <div className="relative">
//           <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>

//           <div className={`relative p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl shadow-lg
//             transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
//             <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
//           </div>

//           <div className={`absolute inset-0 border-2 border-blue-400/50 rounded-lg sm:rounded-xl ${isHovered ? 'animate-ping-slow' : ''}`}></div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center text-center relative">
//         <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-500">
//           {stat.value.includes('+') ? (
//             <>
//               <span className="inline-block min-w-[2ch] text-center">
//                 {visibleStats ? count : 0}
//               </span>
//               <span>+</span>
//             </>
//           ) : stat.value}
//         </div>

//         <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
//       </div>

//       <div className="relative flex justify-center mt-2">
//         <div className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-tight px-2 text-center">
//           {stat.label}
//         </div>
//         <div className="absolute inset-x-0 -inset-y-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
//       </div>

//       <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-400/30 group-hover:border-blue-500/70 transition-colors duration-500"></div>
//       <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/30 group-hover:border-cyan-500/70 transition-colors duration-500"></div>
//       <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400/30 group-hover:border-blue-500/70 transition-colors duration-500"></div>
//       <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/30 group-hover:border-cyan-500/70 transition-colors duration-500"></div>

//       {isHovered && (
//         <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-2 ring-blue-400/30 animate-pulse pointer-events-none"></div>
//       )}
//     </div>
//   );
// };

// const ComingSoonModal = ({
//   title,
//   description,
//   services,
//   onClose,
// }: {
//   title: string;
//   description: string;
//   services: string[];
//   onClose: () => void;
// }) => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
//       <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full animate-scale-in">
//         <div className="p-6 text-center">
//           <h2 className="text-2xl font-bold text-slate-800 mb-2">
//             {title}
//           </h2>

//           <p className="text-slate-600 mb-4">{description}</p>

//           <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl p-4 mb-6">
//             <p className="font-semibold">Website Under Development</p>
//             <p className="text-sm opacity-90">Launching Soon 🚀</p>
//           </div>

//           <div className="text-left mb-6">
//             <h4 className="font-semibold mb-2 text-slate-700">
//               Our Services
//             </h4>

//             <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
//               {services.map((s, i) => (
//                 <li key={i} className="flex items-center gap-2">
//                   <span className="text-green-500">✔</span> {s}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <button
//             onClick={onClose}
//             className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;
/* eslint-disable react-hooks/rules-of-hooks */
// WelcomePage.tsx
import { Building2, TrendingUp, Cpu, ArrowRight, Sparkles, RefreshCw, Award, Users, Globe, Target, Zap, CheckCircle, ChevronUp, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import logo from "../assets/images/hously-logo.png";
import { Link } from 'react-router-dom';

interface WelcomePageProps {
  onSectorClick: (sectorId: string) => void;
}

function WelcomePage({ onSectorClick }: WelcomePageProps) {
  const [showNewBrand, setShowNewBrand] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeModal, setActiveModal] = useState<null | 'real-estate' | 'finance'>(null);

  useEffect(() => {
    setVisibleCards(new Array(sectors.length).fill(false));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewBrand(true);
    }, 2000);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxOffset(scrollY * 0.5);
      const scrolled = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);
      setShowScrollTop(scrollY > 300);

      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleStats(true);
        }
      }

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sectors = [
    {
      id: 'real-estate',
      title: 'Real Estate',
      description: 'Premium residential and commercial properties. Building dreams, creating landmarks.',
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      hoverGradient: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Property Development', 'Commercial Spaces', 'Residential Projects', 'Investment Opportunities']
    },
    {
      id: 'finance',
      title: 'Finance',
      description: 'Comprehensive financial solutions and investment services. Empowering financial freedom.',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      gradient: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)',
      hoverGradient: 'linear-gradient(135deg, #059669 0%, #0f766e 100%)',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Investment Banking', 'Wealth Management', 'Financial Planning', 'Market Analysis']
    },
    {
      id: 'it-tech',
      title: 'IT & Technology',
      description: 'Cutting-edge technology solutions and digital transformation. Innovating tomorrow.',
      icon: Cpu,
      color: 'from-orange-500 to-amber-500',
      gradient: 'linear-gradient(135deg, #f97316 0%, #f59e0b 100%)',
      hoverGradient: 'linear-gradient(135deg, #ea580c 0%, #d97706 100%)',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Software Development', 'Digital Solutions', 'Tech Consulting', 'Innovation Labs']
    }
  ];

  const stats = [
    { value: '12+', label: 'Years Combined Experience', icon: Award },
    { value: '100+', label: 'Projects Completed', icon: Target },
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '3', label: 'Industry Sectors', icon: Globe }
  ];

  const timeline = [
    { year: 'The Beginning', title: 'AAKAR INFRA SERVICES', desc: 'Started with a vision in infrastructure development' },
    { year: 'Evolution', title: 'Growth & Expansion', desc: 'Diversified into multiple sectors and services' },
    { year: 'Today', title: 'HOUSLY FINNTECH REALTY', desc: 'A comprehensive multi-sector conglomerate' }
  ];

  const features = [
    { icon: Zap, title: 'Innovative Solutions', desc: 'Cutting-edge approaches to modern challenges' },
    { icon: Award, title: 'Award-Winning Service', desc: 'Recognized excellence across industries' },
    { icon: CheckCircle, title: 'Proven Track Record', desc: 'Decades of successful project delivery' },
    { icon: Globe, title: 'Global Presence', desc: 'Serving clients across multiple regions' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* Logo - Responsive */}
        <div className="fixed top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 z-40 animate-fade-in">
          <img
            src={logo}
            alt="Hously Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMDAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 sm:opacity-20 md:opacity-40"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-5 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-20 right-10 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 left-20 w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-60 right-40 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-80 left-60 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 right-20 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-60 left-40 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-float" style={{ animationDelay: '1.8s' }}></div>
        </div>

        {/* Parallax Background */}
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10 pointer-events-none"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div className="absolute top-10 left-5 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-blue-400 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-400 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-emerald-400 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg mb-3 sm:mb-6 md:mb-8 border border-slate-200 animate-slide-down max-w-xs mx-auto">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-amber-500 animate-spin-slow" />
                <span className="text-[8px] xs:text-xs sm:text-sm text-slate-600 font-medium">Formerly Known as AAKAR INFRA SERVICES</span>
              </div>

              {/* Brand Transition */}
              <div className="mb-4 sm:mb-6 md:mb-8 relative h-16 sm:h-20 md:h-24 lg:h-32 flex items-center justify-center">
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showNewBrand ? 'opacity-0 scale-75 blur-sm' : 'opacity-100 scale-100'}`}>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-slate-400 mb-0.5 sm:mb-1 md:mb-2 flex items-center justify-center gap-1 sm:gap-2">
                      <Building2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
                      <span>AAKAR</span>
                    </div>
                    <div className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-400 font-light tracking-wider">INFRA SERVICES</div>
                  </div>
                </div>

                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${showNewBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-125 blur-sm'}`}>
                  <RefreshCw className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-blue-500 ${showNewBrand ? 'animate-spin-once' : ''}`} />
                </div>

                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-1000 ${showNewBrand ? 'opacity-100 scale-100' : 'opacity-0 scale-75 blur-sm'}`}>
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 bg-clip-text text-transparent leading-tight animate-gradient px-2 sm:px-3 md:px-4 text-center">
                    HOUSLY FINNTECH REALTY
                  </h1>
                </div>
              </div>

              {/* Tagline */}
              <div className="max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-2 sm:px-3 md:px-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-2 sm:mb-3">
                  Evolved. Expanded. Empowered.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-500 leading-relaxed">
                  We've transformed from AAKAR INFRA SERVICES to HOUSLY FINNTECH REALTY,
                  embracing a bold vision that spans across Real Estate, Financial Services, and Technology.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[10px] xs:text-xs sm:text-sm text-slate-500 px-2">
                {['Three Divisions', 'One Vision', 'Limitless Possibilities'].map((text, i) => (
                  <div key={i} className="flex items-center gap-1 sm:gap-2">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-blue-500' : 'bg-amber-500'}`}></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Cards */}
            <div className="max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-2 sm:mb-3 text-slate-800">
                Explore Our Divisions
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-center text-slate-600 mb-4 sm:mb-6 md:mb-8">
                Click on any division to access specialized services and solutions
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {sectors.map((sector, index) => {
                  const Icon = sector.icon;
                  return (
                    <div
                      key={sector.id}
                      ref={(el) => {
                        cardsRef.current[index] = el;
                      }}
                      onClick={() => {
                        if (sector.id === 'real-estate' || sector.id === 'finance') {
                          setActiveModal(sector.id);
                        } else {
                          onSectorClick(sector.id); // IT & Technology
                        }
                      }}
                      onMouseEnter={() => setHoveredCard(sector.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="group cursor-pointer transform transition-all duration-500"
                      style={{
                        animationDelay: `${index * 200 + 2500}ms`,
                        opacity: visibleCards[index] ? 1 : 0,
                        transform: visibleCards[index] ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <div className="relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-slate-200 hover:border-transparent group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                        {/* Animated Background Layer */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div
                            className="absolute inset-0"
                            style={{
                              background: sector.gradient,
                              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                              transition: 'clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          ></div>
                        </div>

                        {/* Image Section */}
                        <div className="relative h-32 sm:h-36 md:h-40 lg:h-48 xl:h-56 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                          <img
                            src={sector.image}
                            alt={sector.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Floating Icon */}
                          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-20">
                            <div className="p-1.5 sm:p-2 md:p-3 rounded-md sm:rounded-lg md:rounded-xl bg-white/90 backdrop-blur-sm shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${sector.color.replace('from-', 'text-').replace(' to-', '-500')}`} />
                            </div>
                          </div>

                          {/* Animated Overlay */}
                          <div className={`absolute inset-0 ${sector.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-3 sm:p-4 md:p-6 lg:p-8">
                          {/* Floating Badge */}
                          <div className={`absolute -top-3 sm:-top-4 md:-top-6 left-3 sm:left-4 md:left-8 p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl bg-gradient-to-br ${sector.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" />
                          </div>

                          <div className="pt-3 sm:pt-4 md:pt-6 lg:pt-8">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-slate-800 group-hover:text-white transition-colors duration-300">
                              {sector.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors duration-300 mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-relaxed">
                              {sector.description}
                            </p>

                            {/* Features List - Appears on hover */}
                            <div className="mb-3 sm:mb-4 md:mb-6 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                                {sector.features.map((feature, i) => (
                                  <div key={i} className="flex items-center gap-0.5 sm:gap-1">
                                    <div className={`w-1 h-1 rounded-full ${sector.color.replace('from-', 'bg-').replace(' to-', '-500')}`}></div>
                                    <span className="text-[10px] xs:text-xs text-slate-600 group-hover:text-slate-300 transition-colors duration-300">
                                      {feature}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex items-center text-blue-600 font-semibold group-hover:text-white transition-all duration-300">
                              <span className="text-xs sm:text-sm md:text-base">Explore Division</span>
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                            </div>
                          </div>
                        </div>

                        {/* Animated Border Bottom */}
                        <div className={`h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r ${sector.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl ring-1 ring-transparent group-hover:ring-white/30 transition-all duration-500 pointer-events-none"></div>

                        {/* Particle Effects on Hover */}
                        {hoveredCard === sector.id && (
                          <>
                            <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Section */}
            <div ref={statsRef} className="mt-12 sm:mt-20 md:mt-32 mb-12 sm:mb-16 md:mb-20">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-800">
                  Our Impact in Numbers
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-600">
                  Excellence measured through achievements
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl mx-auto px-2 sm:px-3 md:px-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const [isHovered, setIsHovered] = useState(false);
                  const [count, setCount] = useState(0);

                  useEffect(() => {
                    if (visibleStats) {
                      const targetValue = parseInt(stat.value);
                      if (isNaN(targetValue)) return;

                      const duration = 1500;
                      const steps = 60;
                      const increment = targetValue / steps;
                      let current = 0;

                      const timer = setInterval(() => {
                        current += increment;
                        if (current >= targetValue) {
                          setCount(targetValue);
                          clearInterval(timer);
                        } else {
                          setCount(Math.floor(current));
                        }
                      }, duration / steps);

                      return () => clearInterval(timer);
                    }
                  }, [visibleStats, stat.value]);

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={`relative bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-200/50 
                      shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden group
                      ${visibleStats ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{
                        animationDelay: `${index * 150}ms`,
                        transform: isHovered ? 'translateY(-4px) sm:translateY(-6px) md:translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent"></div>
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{ transitionDelay: '100ms' }}></div>
                      </div>

                      {/* Icon Container with Glow Effect */}
                      <div className="relative flex justify-center mb-2 sm:mb-3 md:mb-4">
                        <div className="relative">
                          {/* Outer Glow */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md sm:rounded-lg md:rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>

                          {/* Icon Background */}
                          <div className={`relative p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md sm:rounded-lg md:rounded-xl shadow-lg 
                          transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
                            <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" />
                          </div>

                          {/* Pulsing Ring */}
                          <div className={`absolute inset-0 border-2 border-blue-400/50 rounded-md sm:rounded-lg md:rounded-xl ${isHovered ? 'animate-ping-slow' : ''}`}></div>
                        </div>
                      </div>

                      {/* Animated Number Counter */}
                      <div className="flex flex-col items-center text-center">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-500">
                          {stat.value.includes('+') ? (
                            <>
                              <span className="inline-block min-w-[2ch] text-center">
                                {visibleStats ? count : 0}
                              </span>
                              <span>+</span>
                            </>
                          ) : stat.value}
                        </div>

                        {/* Animated Underline */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                      </div>

                      {/* Label with Hover Effect */}
                      <div className="relative flex justify-center mt-1 sm:mt-2">
                        <div className="text-[10px] xs:text-xs sm:text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-tight px-1 sm:px-2 text-center">
                          {stat.label}
                        </div>

                        {/* Label Background on Hover */}
                        <div className="absolute inset-x-0 -inset-y-1 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-l border-blue-400/30 group-hover:border-blue-500/70 transition-colors duration-500"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-t border-r border-cyan-400/30 group-hover:border-cyan-500/70 transition-colors duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-l border-blue-400/30 group-hover:border-blue-500/70 transition-colors duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 border-b border-r border-cyan-400/30 group-hover:border-cyan-500/70 transition-colors duration-500"></div>

                      {/* Pulse Effect on Hover */}
                      {isHovered && (
                        <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl ring-2 ring-blue-400/30 animate-pulse pointer-events-none"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-12 sm:mt-20 md:mt-32 mb-12 sm:mb-16 md:mb-20">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-800">Why Choose Us</h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-600">What sets us apart from the rest</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-200 shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 animate-fade-in"
                      style={{ animationDelay: `${index * 150 + 3500}ms` }}
                    >
                      <div className="mb-2 sm:mb-3 md:mb-4 inline-flex p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md sm:rounded-lg md:rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-800 mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mt-12 sm:mt-20 md:mt-32 mb-12 sm:mb-16 md:mb-20">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-slate-800">Our Transformation Journey</h2>
                <p className="text-xs sm:text-sm md:text-base text-slate-600">From vision to Realty</p>
              </div>
              <div className="max-w-4xl mx-auto px-2 sm:px-3 md:px-4">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 hidden sm:block"></div>
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative mb-6 sm:mb-8 md:mb-12 ${index % 2 === 0 ? 'sm:pr-1/2 sm:text-right' : 'sm:pl-1/2'} animate-fade-in`}
                      style={{ animationDelay: `${index * 300 + 4000}ms` }}
                    >
                      <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:ml-auto sm:pr-6 md:pr-8' : 'sm:pl-6 md:pl-8'}`}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-500">
                          <div className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-semibold mb-1 sm:mb-2 md:mb-3">
                            {item.year}
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 mb-1 sm:mb-2">{item.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 top-4 sm:top-6 md:top-8 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 sm:border-3 md:border-4 border-white shadow-lg hidden sm:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-20 md:mt-32 mb-0 w-full">
              <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 bg-blue-500 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow"></div>
                  <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-96 md:h-96 bg-cyan-500 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="relative z-10 container mx-auto max-w-6xl">
                  <div className="text-center mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 md:mb-3">
                      Our Journey Forward
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-blue-100">A transformation story of vision and innovation</p>
                  </div>

                  <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-center mb-4 sm:mb-6 md:mb-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-500">
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                        <div className="p-1.5 sm:p-2 md:p-3 bg-slate-700/50 rounded-md sm:rounded-lg md:rounded-xl">
                          <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-slate-300" />
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-slate-300">AAKAR INFRA SERVICES</h3>
                          <p className="text-blue-200 text-[10px] xs:text-xs">Where it began</p>
                        </div>
                      </div>
                      <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                        Built on excellence and trust, establishing a legacy of quality infrastructure.
                      </p>
                    </div>

                    <div className="flex justify-center my-1 sm:my-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 sm:p-2 md:p-3 lg:p-4 rounded-full">
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-blue-400/30 shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-500">
                      <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                        <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md sm:rounded-lg md:rounded-xl shadow-lg">
                          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white animate-spin-slow" />
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">HOUSLY FINNTECH REALTY</h3>
                          <p className="text-cyan-200 text-[10px] xs:text-xs">The future is now</p>
                        </div>
                      </div>
                      <p className="text-white text-xs sm:text-sm leading-relaxed">
                        Expanding horizons across real estate, finance, and technology.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 text-center">
                    <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 italic leading-relaxed">
                      "Building on our strong foundation, we're creating a future where real estate, finance, and technology converge to deliver unparalleled value."
                    </blockquote>
                    <p className="text-blue-200 text-xs sm:text-sm">
                      Transforming industries and shaping the future together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4 text-[10px] xs:text-xs sm:text-sm">
                <p className="text-slate-400 text-center sm:text-left">
                  © {new Date().getFullYear()} Hously Finntech Realty. All rights reserved.
                </p>

                <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  <Link
                    to="/privacy-policy"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-of-service"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="/cookie-policy"
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </footer>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className={`fixed right-2 bottom-2 sm:right-4 sm:bottom-4 md:right-8 md:bottom-8 z-50 p-2 sm:p-3 md:p-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-full shadow-xl hover:shadow-blue-500/50 hover:scale-110 active:scale-95 transition-all duration-300 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
              }`}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </button>
        </div>

        {/* Add custom animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes spin-once {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-once {
            animation: spin-once 1s ease-in-out;
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 6s ease infinite;
          }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
          
          @keyframes slide-down {
            from { transform: translateY(-10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slide-down 0.6s ease-out;
          }
          
          @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scale-in 0.5s ease-out forwards;
          }
          
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
          }
          .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </div>

      {/* Modals */}
      {activeModal === 'real-estate' && (
        <ComingSoonModal
          title="Real Estate Division"
          description="Premium residential and commercial property solutions."
          services={[
            'Residential Projects',
            'Commercial Spaces',
            'Property Management',
            'Real Estate Consulting',
          ]}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'finance' && (
        <ComingSoonModal
          title="Finance Division"
          description="Smart financial solutions and investment services."
          services={[
            'Investment Advisory',
            'Wealth Management',
            'Financial Planning',
            'Portfolio Management',
          ]}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  );
}

const ComingSoonModal = ({
  title,
  description,
  services,
  onClose,
}: {
  title: string;
  description: string;
  services: string[];
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-3 md:p-4">
      <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl max-w-xs sm:max-w-sm md:max-w-lg w-full mx-2 sm:mx-3 md:mx-4 animate-scale-in">
        <div className="p-4 sm:p-5 md:p-6 text-center">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1 sm:p-2 hover:bg-slate-100 rounded-full transition"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
            </button>
          </div>

          <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{description}</p>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6">
            <p className="font-semibold text-sm sm:text-base">Website Under Development</p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">Launching Soon 🚀</p>
          </div>

          <div className="text-left mb-4 sm:mb-5 md:mb-6">
            <h4 className="font-semibold mb-1.5 sm:mb-2 text-slate-700 text-sm sm:text-base">
              Our Services
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
              {services.map((s, i) => (
                <li key={i} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-green-500 flex-shrink-0">✔</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={onClose}
            className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;