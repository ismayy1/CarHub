import React, { useState } from 'react';
import { Settings, Star, Search } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
}

const services: Service[] = [
  {
    id: '1',
    name: 'Full Service',
    description: 'Complete car check-up and maintenance',
    rating: 4.8,
    price: 299,
    category: 'Maintenance',
  },
  {
    id: '2',
    name: 'Oil Change',
    description: 'Premium oil change service',
    rating: 4.5,
    price: 79,
    category: 'Maintenance',
  },
  {
    id: '3',
    name: 'Brake Service',
    description: 'Brake pad replacement and system check',
    rating: 4.7,
    price: 199,
    category: 'Repair',
  },
  {
    id: '4',
    name: 'Tire Rotation',
    description: 'Tire rotation and balance',
    rating: 4.3,
    price: 89,
    category: 'Maintenance',
  },
  {
    id: '5',
    name: 'Engine Diagnostics',
    description: 'Complete engine diagnostic scan',
    rating: 4.9,
    price: 149,
    category: 'Diagnostics',
  },
];

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');

  const filteredServices = services
    .filter((service) => {
      const matchesSearch = service.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === '' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return a.price - b.price;
    });

  const categories = Array.from(
    new Set(services.map((service) => service.category))
  );

  return (
    <div className="flex-1 bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Car Services</h1>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'price')}
              className="px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.name}
                    </h3>
                    <span className="inline-block px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
                      {service.category}
                    </span>
                  </div>
                  <Settings className="text-gray-400" size={24} />
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                    <span className="ml-1 font-semibold">{service.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-600">
                    ${service.price}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};