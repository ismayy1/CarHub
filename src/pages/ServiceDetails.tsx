import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Phone, Mail, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ServiceDetails: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // In a real app, this would come from your backend
  const service = {
    id: '1',
    name: 'Full Service',
    description: 'Complete car check-up and maintenance including oil change, brake inspection, and general safety check.',
    rating: 4.8,
    price: 299,
    category: 'Maintenance',
    location: {
      address: '123 Service Street, Auto City, AC 12345',
      lat: 40.7128,
      lng: -74.0060
    },
    availableTimes: [
      '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
    ],
    contactInfo: {
      phone: '+1 (555) 123-4567',
      email: 'service@premiumauto.com'
    }
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time');
      return;
    }
    // In a real app, this would make an API call to create the booking
    alert('Booking submitted successfully!');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link
          to="/services"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6"
        >
          <ChevronLeft size={20} />
          <span>Back to services</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.name}
                </h1>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${service.price}
                  </span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.location.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.contactInfo.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.contactInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${service.location.lat},${service.location.lng}`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Book Appointment
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Select Date
                  </label>
                  <div className="flex items-center">
                    <Calendar className="text-gray-400 dark:text-gray-500 mr-2" />
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full rounded-md border-gray-300 dark:border-gray-600 
                               dark:bg-gray-700 dark:text-white focus:border-blue-500 
                               dark:focus:border-blue-400 focus:ring-blue-500 
                               dark:focus:ring-blue-400 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Select Time
                  </label>
                  <div className="flex items-center">
                    <Clock className="text-gray-400 dark:text-gray-500 mr-2" />
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full rounded-md border-gray-300 dark:border-gray-600 
                               dark:bg-gray-700 dark:text-white focus:border-blue-500 
                               dark:focus:border-blue-400 focus:ring-blue-500 
                               dark:focus:ring-blue-400 shadow-sm"
                    >
                      <option value="">Choose a time</option>
                      {service.availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 
                           dark:hover:bg-blue-600 text-white py-2 px-4 rounded-md 
                           transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};