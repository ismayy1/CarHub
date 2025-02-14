import React from 'react';
import { Car as CarIcon, User, BarChart2, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();
  const user = localStorage.getItem('user');

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation */}
        <nav className="px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <CarIcon size={32} className="text-white" />
            <span>Premium Auto Sales</span>
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive(
                    '/'
                  )}`}
                >
                  <CarIcon size={20} />
                  <span>Cars</span>
                </Link>
                <Link
                  to="/services"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive(
                    '/services'
                  )}`}
                >
                  <Settings size={20} />
                  <span>Services</span>
                </Link>
                <Link
                  to="/statistics"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive(
                    '/statistics'
                  )}`}
                >
                  <BarChart2 size={20} />
                  <span>Statistics</span>
                </Link>
                <Link
                  to="/admin"
                  className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${isActive(
                    '/admin'
                  )}`}
                >
                  <User size={20} />
                  <span>Admin</span>
                </Link>
              </>
            ) : (
              <Link
                to="/register"
                className="flex items-center gap-2 hover:text-blue-200 transition-colors"
              >
                <User size={20} />
                <span>Register/Login</span>
              </Link>
            )}
          </div>
        </nav>

        {/* Animated Banner */}
        <div className="relative h-64 overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

          {/* Moving cars animation */}
          <div className="absolute bottom-0 w-full h-32">
            <div className="animate-car-slide flex gap-8">
              <img
                src="https://www.svgrepo.com/show/89866/sports-car.svg"
                alt="Car 1"
                className="h-16 invert"
              />
              <img
                src="https://www.svgrepo.com/show/89867/car.svg"
                alt="Car 2"
                className="h-16 invert"
              />
              <img
                src="https://www.svgrepo.com/show/89868/car-side-view.svg"
                alt="Car 3"
                className="h-16 invert"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Car Today
            </h1>
            <p className="text-xl opacity-90">
              Premium selection of luxury and performance vehicles
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};