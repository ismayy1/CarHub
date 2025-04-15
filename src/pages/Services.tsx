import React from 'react';
import { useServiceStore } from '../data/Services';
import { useTheme } from '../contexts/ThemeContext';
import { ServicesHeader } from '../components/headers/ServiceHeader';
import { Star } from 'lucide-react';

export const Services: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { services } = useServiceStore();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <ServicesHeader />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-lg shadow-md overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.name}
                  </h3>
                  <div className="flex items-center">
                    <Star
                      className={`h-5 w-5 ${
                        isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                      }`}
                      fill="currentColor"
                    />
                    <span className={`ml-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {service.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {service.category}
                  </span>
                  <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    ${service.price.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};