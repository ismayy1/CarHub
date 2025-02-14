import React, { useRef } from 'react';
import { Car as CarIcon, User, BarChart2, Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../contexts/ThemeContext';
import '../../index.css';

export const Header: React.FC = () => {
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
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <CarIcon size={32} className="text-black dark:text-[#eff1f3d7]" />
          <span className="text-black dark:text-[#eff1f3d7]">Car-Hub</span>
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                  location.pathname === '/' ? 'bg-[#11355baf]' : ''
                }`}
              >
                <CarIcon size={20} />
                <span>Cars</span>
              </Link>
              <Link
                to="/services"
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                  location.pathname === '/services' ? 'bg-[#11355baf]' : ''
                }`}
              >
                <Settings size={20} />
                <span>Services</span>
              </Link>
              <Link
                to="/statistics"
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                  location.pathname === '/statistics' ? 'bg-[#11355baf]' : ''
                }`}
              >
                <BarChart2 size={20} />
                <span>Statistics</span>
              </Link>
              <Link
                to="/admin"
                className={`flex items-center gap-2 px-4 py-2 rounded-md hover:bg-[#11355baf] dark:hover:bg-[#11355baf] transition-colors text-black dark:text-[#eff1f3d7] ${
                  location.pathname === '/admin' ? 'bg-[#11355baf]' : ''
                }`}
              >
                <User size={20} />
                <span>Admin</span>
              </Link>
            </>
          ) : (
            <Link
              to="/register"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors text-black dark:text-[#eff1f3d7]"
              onClick={handleButtonClick}
            >
              <User size={20} />
              <span>Register/Login</span>
            </Link>
          )}
          
        </div>
        
        <div className="ml-4 border-l border-blue-500 dark:border-blue-700 pl-4">
            <ThemeToggle />
          </div>
      </nav>

      <header className="mt-[70px] bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white import-index min-h-screen">
        <div className="max-w-7xl mx-auto pt-[64px]">
          <div className="-mt-[100px] relative h-[calc(100vh-64px)] overflow-hidden loginForum flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center text-center px-8 space-y-12">
              <div>
                <h1 className="text-6xl font-bold mb-3 dark:text-white">BUY CARS</h1>
                <p className="text-xl text-gray-200 dark:text-gray-300">
                  Buy a new or used car from dealers or normal users
                </p>
              </div>
              
              <div>
                <h1 className="text-6xl font-bold mb-3 dark:text-white">SELL CARS</h1>
                <p className="text-xl text-gray-200 dark:text-gray-300">
                  Fill in the details of the car and list it for free
                </p>
              </div>
            </div>
          </div>

          <div className="button-container vehicle-services absolute bottom-8 left-0 right-0 -mt-[100px]">
            <div className="flex flex-row justify-center items-center max-w-7xl mx-auto gap-[10px]">
              <button 
                id='btn' 
                onClick={handleVehiclesClick}
                className="vehicles w-[190px] h-[50px] flex items-center justify-center bg-[#11355baf] text-white rounded-lg text-sm transition-all duration-300 ease-in-out hover:bg-[#11355baf]/80"
              >
                Vehicles
              </button>
              <button 
                id='btn' 
                onClick={handleServicesClick}
                className="servicesBtn w-[190px] h-[50px] flex items-center justify-center bg-[#11355baf] text-white rounded-lg text-sm transition-all duration-300 ease-in-out hover:bg-[#11355baf]/80"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};