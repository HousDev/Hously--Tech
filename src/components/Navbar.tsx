/* eslint-disable react-hooks/purity */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/hously-logo.png";
import footerLogo from "../assets/images/footer-logo1.png";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-6 right-6 bg-[#0c1e4a] text-white p-3 rounded-full hover:bg-[#0076d8] transition"
          >
            <X size={24} />
          </button>

          {/* Logo */}
          <div className="mb-8">
            <img src={logo} alt="Hously Logo" className="h-12 w-auto" />
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Hously is a modern and innovative IT solutions company delivering
            reliable, scalable, and secure digital services tailored to meet
            the evolving needs of businesses across industries.
          </p>

          {/* Contact Details */}
          <div className="mb-8">
            <h3 className="text-[#0c1e4a] text-xl font-bold mb-6">
              Contact Details
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#0076d8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-700">
                    First Floor,Tamara Uprise Rahatni, Pune, 411017
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#0076d8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">+91 9371 00 9381</p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#0076d8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">info@hously.in</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-[#0c1e4a] text-xl font-bold mb-6">Follow Us</h3>

            {/* Social Links with React Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1CxvUhjQLX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0c1e4a]
                 hover:bg-[#0076d8] hover:text-white transition-all duration-300
                 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                title="Follow us on Facebook"
              >
                <FaFacebookF className="text-base" />
              </a>

              <a
                href="https://www.instagram.com/hously.in?igsh=MWFtMmNsMjh0Ym5idg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0c1e4a]
                 hover:bg-[#0076d8] hover:text-white transition-all duration-300
                 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                title="Follow us on Instagram"
              >
                <FaInstagram className="text-base" />
              </a>

              <a
                href="https://www.linkedin.com/company/houlsy-finntech-realty/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0c1e4a]
                 hover:bg-[#0076d8] hover:text-white transition-all duration-300
                 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                title="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="text-base" />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0c1e4a]
                 hover:bg-[#0076d8] hover:text-white transition-all duration-300
                 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                title="Follow us on Twitter"
              >
                <FaTwitter className="text-base" />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-[#0c1e4a]
                 hover:bg-[#0076d8] hover:text-white transition-all duration-300
                 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                title="Follow us on YouTube"
              >
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : isHomePage
            ? "bg-transparent"
            : "bg-white shadow-lg"
        }`}
      >
        <div
          className={`w-full transition-all duration-300 ${
            isScrolled || !isHomePage
              ? "px-4 sm:px-6 lg:px-8 py-4"
              : "bg-white/20 backdrop-blur-md border-b border-white/30 px-4 sm:px-6 lg:px-8 py-4"
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center navbar-logo">
              <img
  src={isScrolled || !isHomePage ? logo : footerLogo}
  alt="Hously Logo"
  className={`transition-all duration-300 ${
    isScrolled || !isHomePage
      ? "h-14 sm:h-16 md:h-14 w-auto"   // 🔼 increased logo size
      : "h-11 sm:h-12 md:h-14 w-auto filter drop-shadow-lg"
  }`}
  style={{
    filter:
      isScrolled || !isHomePage
        ? "none"
        : "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.1) contrast(1.2)",
  }}
/>

            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link
                to="/"
                className={`transition font-medium relative group ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:text-[#0076d8]"
                    : "text-white hover:text-[#ffd801]"
                }`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    isScrolled || !isHomePage ? "bg-[#0076d8]" : "bg-[#ffd801]"
                  }`}
                ></span>
              </Link>
              <Link
                to="/services"
                className={`transition font-medium relative group ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:text-[#0076d8]"
                    : "text-white hover:text-[#ffd801]"
                }`}
              >
                Services
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    isScrolled || !isHomePage ? "bg-[#0076d8]" : "bg-[#ffd801]"
                  }`}
                ></span>
              </Link>
              <Link
                to="/about"
                className={`transition font-medium relative group ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:text-[#0076d8]"
                    : "text-white hover:text-[#ffd801]"
                }`}
              >
                About
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    isScrolled || !isHomePage ? "bg-[#0076d8]" : "bg-[#ffd801]"
                  }`}
                ></span>
              </Link>
              <Link
                to="/contact"
                className={`transition font-medium relative group ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:text-[#0076d8]"
                    : "text-white hover:text-[#ffd801]"
                }`}
              >
                Contact
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    isScrolled || !isHomePage ? "bg-[#0076d8]" : "bg-[#ffd801]"
                  }`}
                ></span>
              </Link>
              <Link
                to="/career"
                className={`transition font-medium relative group ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:text-[#0076d8]"
                    : "text-white hover:text-[#ffd801]"
                }`}
              >
                Career
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    isScrolled || !isHomePage ? "bg-[#0076d8]" : "bg-[#ffd801]"
                  }`}
                ></span>
              </Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#0076d8] hover:bg-[#0066c0] text-white px-7 py-3 rounded-full transition font-semibold shadow-lg shadow-[#0076d8]/30 flex items-center space-x-2 hover:shadow-xl hover:shadow-[#0076d8]/50 transform hover:scale-105"
              >
                <span>Get A Quote</span>
              </button>

              <button
                onClick={() => setIsSidebarOpen(true)}
                className={`p-2.5 rounded-lg transition hover:rotate-180 duration-300 ${
                  isScrolled || !isHomePage
                    ? "hover:bg-gray-100 text-gray-700"
                    : "text-white hover:bg-white/30 backdrop-blur-sm"
                }`}
              >
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${
                        isScrolled || !isHomePage ? "bg-[#0076d8]" : "bg-white"
                      }`}
                    ></div>
                  ))}
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded transition ${
                  isScrolled || !isHomePage
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white "
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div
              className={`lg:hidden mt-4 pt-4 animate-fadeIn ${
                isScrolled || !isHomePage
                  ? "border-t border-gray-200"
                  : "border-t border-white/20"
              }`}
            >
              <div className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-700 hover:text-[#0076d8] hover:bg-gray-50"
                      : "text-white hover:text-[#ffd801] hover:bg-white/20"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-700 hover:text-[#0076d8] hover:bg-gray-50"
                      : "text-white hover:text-[#ffd801] hover:bg-white/20"
                  }`}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-700 hover:text-[#0076d8] hover:bg-gray-50"
                      : "text-white hover:text-[#ffd801] hover:bg-white/20"
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-700 hover:text-[#0076d8] hover:bg-gray-50"
                      : "text-white hover:text-[#ffd801] hover:bg-white/20"
                  }`}
                >
                  Contact
                </Link>
                <Link
                  to="/career"
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition ${
                    isScrolled || !isHomePage
                      ? "text-gray-700 hover:text-[#0076d8] hover:bg-gray-50"
                      : "text-white hover:text-[#ffd801] hover:bg-white/20"
                  }`}
                >
                  Career
                </Link>
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsOpen(false);
                  }}
                  className="w-full mt-3 bg-[#0076d8] hover:bg-[#0066c0] text-white px-6 py-3.5 rounded-full transition font-semibold transform hover:scale-105"
                >
                  Get A Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;