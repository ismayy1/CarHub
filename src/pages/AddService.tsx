import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useServiceStore } from '../data/Services';
import { useTheme } from '../contexts/ThemeContext';

export const AddService: React.FC = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const addService = useServiceStore((state) => state.addService);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rating: 5,
    price: 0,
    category: 'Maintenance',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price) {
      alert('Please fill in all required fields');
      return;
    }
    addService(formData);
    alert('Service added successfully!');
    navigate('/admin');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'rating' ? Number(value) : value,
    }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
      <div className="max-w-2xl mx-auto px-4">
        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
          <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Add New Service
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                Service Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-md shadow-sm ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:ring-blue-500`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className={`w-full rounded-md shadow-sm ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:ring-blue-500`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                min="1"
                max="5"
                step="0.1"
                className={`w-full rounded-md shadow-sm ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className={`w-full rounded-md shadow-sm ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:ring-blue-500`}
                required
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full rounded-md shadow-sm ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                } border focus:border-blue-500 focus:ring-blue-500`}
              >
                <option value="Maintenance">Maintenance</option>
                <option value="Repair">Repair</option>
                <option value="Diagnostics">Diagnostics</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/admin')}
                className={`px-4 py-2 rounded-md ${
                  isDarkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 