import React, { useRef } from 'react';
import { ArrowRight, CheckCircle, Link } from 'lucide-react';

import { Car as CarIcon, User, BarChart2, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../contexts/ThemeContext';
import '../../index.css';
import { Link as RouterLink } from 'react-router-dom';

export const ServicesHeader: React.FC = () => {
  const highlights = [
    { id: 1, text: "Professional Expertise" },
    { id: 2, text: "24/7 Support" },
    { id: 3, text: "Tailored Solutions" }
  ];

  
  const location = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem('user');

  const formRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVehiclesClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 px-4 py-4 flex justify-between items-center bg-[rgba(255,255,255,0.568)] dark:bg-black/40 backdrop-blur-sm">
          <RouterLink to="/" className="flex items-center gap-2 text-2xl font-bold">
            <CarIcon size={32} className="text-black dark:text-[#eff1f3d7]" />
            <span className="text-black dark:text-[#eff1f3d7]">Car-Hub</span>
          </RouterLink>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <RouterLink
                  to="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                    location.pathname === '/' ? 'bg-[#11355baf]' : ''
                  }`}
                >
                  <CarIcon size={20} />
                  <span>Cars</span>
                </RouterLink>
                <RouterLink
                  to="/services"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                    location.pathname === '/services' ? 'bg-[#11355baf]' : ''
                  }`}
                >
                  <Settings size={20} />
                  <span>Services</span>
                </RouterLink>
                <RouterLink
                  to="/statistics"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                    location.pathname === '/statistics' ? 'bg-[#11355baf]' : ''
                  }`}
                >
                  <BarChart2 size={20} />
                  <span>Statistics</span>
                </RouterLink>
                <RouterLink
                  to="/admin"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                    location.pathname === '/admin' ? 'bg-[#11355baf]' : ''
                  }`}
                >
                  <User size={20} />
                  <span>Admin</span>
                </RouterLink>
              </>
            ) : (
              <RouterLink
                to="/register"
                className="flex items-center gap-2 hover:text-blue-200 transition-colors text-black dark:text-[#eff1f3d7]"
                onClick={handleButtonClick}
              >
                <User size={20} />
                <span>Register/Login</span>
              </RouterLink>
            )}
            
          </div>
          
          <div className="ml-4 border-l border-blue-500 dark:border-blue-700 pl-4">
              <ThemeToggle />
            </div>
        </nav>

      <header className="mt-[70px]">
        <div className="relative bg-[#11355baf] dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-950">
          {/* Background Pattern */}
          <div className="felementser absolute inset-0 opacity-10 dark:opacity-20">
            <div className="absolute inset-0" 
                style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
                  backgroundSize: '50px 50px'
                }} />
          </div>

          {/* Content Container */}
          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            {/* Main Header Content */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-5xl lg:text-6xl">
                Our Services
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100 dark:text-blue-200">
                Delivering exceptional solutions to help your business thrive in the digital age
              </p>
            </div>

            {/* Highlights Section */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
              {highlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="flex items-center justify-center space-x-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4"
                >
                  <CheckCircle className="h-5 w-5 text-blue-200 dark:text-blue-300" />
                  <span className="text-white dark:text-gray-100 font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 dark:text-blue-900 bg-white dark:bg-gray-100 hover:bg-blue-50 dark:hover:bg-gray-200 transition-colors duration-200">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="service-first -mt-20 pb-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Premium Car Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Experience top-tier automotive care with our comprehensive service packages
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Cards */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Basic Maintenance
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Regular check-ups and essential maintenance to keep your vehicle running smoothly
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Advanced Diagnostics
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Comprehensive system analysis using state-of-the-art diagnostic tools
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Performance Tuning
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Custom performance optimization for enhanced vehicle capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default ServicesHeader;