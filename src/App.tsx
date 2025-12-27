// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import BackToTop from './components/BackToTop'; // Import the new component

// // Pages
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/About/page';
// import ServicesPage from './pages/services/page';
// import ContactSection from './pages/Contact/page';
// import TestimonialPage from './pages/Testinomial/page';
// import CaseStudyApp from './pages/CaseStudy/page';
// import HouslyCareerPage from './pages/Career/page';
// import CareersPage from './pages/Career/job/page';
// import JobDetailsPage from './pages/Career/job/[id]/page';
// import JobApplicationPage from './pages/Career/job/[id]/apply/page';
// import { useState } from 'react';

// function App() {
//   const [showIt,setShowIt]=useState(true)
//   return (
//     <Router>
//       {showIt?<div>
//         <a href='https://hously.in'>finance</a>
//         <a href='https://hously.in'>Real Estatef</a>
//         <button onClick={()=>setShowIt(false)}>IT Services</button>
//       </div>:<div className="relative min-h-screen">
//         <Navbar />

//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} />
//             <Route path="/contact" element={<ContactSection />} />
//             <Route path="/testimonial" element={<TestimonialPage />} />
//             <Route path="/casestudy" element={<CaseStudyApp />} />
//             <Route path="/career" element={<HouslyCareerPage />} />
//             <Route path="/career/job" element={<CareersPage />} />
//             {/* Dynamic routes for job details and application */}
//             <Route path="/career/job/:id" element={<JobDetailsPage />} />
//             <Route path="/career/job/:id/apply" element={<JobApplicationPage />} />
//           </Routes>
//         </main>

//         <Footer />
        
//         {/* Add BackToTop button here - it will appear on all pages */}
//         <BackToTop />
//       </div>}
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WelcomePage from "./components/welcome_page";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About/page";
import ServicesPage from "./pages/services/page";
import ContactSection from "./pages/Contact/page";
import TestimonialPage from "./pages/Testinomial/page";
import CaseStudyApp from "./pages/CaseStudy/page";
import HouslyCareerPage from "./pages/Career/page";
import CareersPage from "./pages/Career/job/page";
import JobDetailsPage from "./pages/Career/job/[id]/page";
import JobApplicationPage from "./pages/Career/job/[id]/apply/page";

// Policy Pages (components folder)
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CookiePolicy from "./components/CookiePolicy";

function AppContent() {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation();

  const handleSectorClick = (sectorId: string) => {
    if (sectorId === "real-estate" || sectorId === "finance") {
      window.location.href = "https://hously.in";
    } else if (sectorId === "it-tech") {
      setShowWelcome(false);
      window.scrollTo(0, 0);
    }
  };

  // Hide welcome page when navigating away from home
  useEffect(() => {
    if (location.pathname !== "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowWelcome(false);
    }
  }, [location.pathname]);

  if (showWelcome && location.pathname === "/") {
    return <WelcomePage onSectorClick={handleSectorClick} />;
  }

  // ❗ Routes where Navbar & Footer should be hidden
  const hideLayoutRoutes = [
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="relative min-h-screen flex flex-col">
      {!hideLayout && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/casestudy" element={<CaseStudyApp />} />

          {/* Career Pages */}
          <Route path="/career" element={<HouslyCareerPage />} />
          <Route path="/career/job" element={<CareersPage />} />
          <Route path="/career/job/:id" element={<JobDetailsPage />} />
          <Route path="/career/job/:id/apply" element={<JobApplicationPage />} />

          {/* Policy Pages (NO Navbar & Footer) */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
      {!hideLayout && <BackToTop />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
