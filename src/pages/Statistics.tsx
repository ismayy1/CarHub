import React, { useState, useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useCarStore } from '../data/cars';
import { Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const COLORS = ['#2563EB', '#059669', '#D97706', '#DC2626'];
const DARK_COLORS = ['#60A5FA', '#34D399', '#FBBF24', '#FB923C'];

export const Statistics: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { cars } = useCarStore();
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    minPrice: '',
    maxPrice: '',
    condition: '',
    startDate: '',
    endDate: '',
  });

  // Get unique makes for the filter dropdown
  const makes = useMemo(() => 
    Array.from(new Set(cars.map(car => car.make))),
    [cars]
  );

  // Get models for selected make
  const models = useMemo(() => 
    Array.from(new Set(cars
      .filter(car => !filters.make || car.make === filters.make)
      .map(car => car.model))),
    [cars, filters.make]
  );

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (filters.make && car.make !== filters.make) return false;
      if (filters.model && car.model !== filters.model) return false;
      if (filters.minPrice && car.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false;
      if (filters.condition && car.condition !== filters.condition) return false;
      return true;
    });
  }, [cars, filters]);

  // Simulated purchase data with random dates for demonstration
  const purchaseData = useMemo(() => {
    return filteredCars.map((car) => ({
      name: `${car.make} ${car.model}`,
      purchases: Math.floor(Math.random() * 100),
      date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
    }));
  }, [filteredCars]);

  const conditionData = useMemo(() => [
    {
      name: 'New',
      value: filteredCars.filter((car) => car.condition === 'New').length,
    },
    {
      name: 'Used',
      value: filteredCars.filter((car) => car.condition === 'Used').length,
    },
  ], [filteredCars]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
      // Reset model when make changes
      ...(name === 'make' && { model: '' }),
    }));
  };

  return (
    <div className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
            <div className="flex items-center gap-2 mb-4">
              <Filter size={20} className="text-blue-600" />
              <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter Statistics
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                  Make
                </label>
                <select
                  value={filters.make}
                  onChange={(e) => handleFilterChange('make', e.target.value)}
                  className={`w-full rounded-md shadow-sm 
                    ${isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'}
                    border focus:border-blue-500 focus:ring-blue-500`}
                >
                  <option value="">All Makes</option>
                  {makes.map(make => (
                    <option key={make} value={make}>{make}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                  Model
                </label>
                <select
                  value={filters.model}
                  onChange={(e) => handleFilterChange('model', e.target.value)}
                  className={`w-full rounded-md shadow-sm 
                    ${isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'}
                    border focus:border-blue-500 focus:ring-blue-500`}
                  disabled={!filters.make}
                >
                  <option value="">All Models</option>
                  {models.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                  Condition
                </label>
                <select
                  value={filters.condition}
                  onChange={(e) => handleFilterChange('condition', e.target.value)}
                  className={`w-full rounded-md shadow-sm 
                    ${isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'}
                    border focus:border-blue-500 focus:ring-blue-500`}
                >
                  <option value="">All Conditions</option>
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                  Min Price
                </label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  placeholder="Min Price"
                  className={`w-full rounded-md shadow-sm 
                    ${isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'}
                    border focus:border-blue-500 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                  Max Price
                </label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  placeholder="Max Price"
                  className={`w-full rounded-md shadow-sm 
                    ${isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'}
                    border focus:border-blue-500 focus:ring-blue-500`}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                  Date Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={filters.startDate}
                    onChange={(e) => handleFilterChange('startDate', e.target.value)}
                    className={`w-full rounded-md shadow-sm 
                      ${isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'}
                      border focus:border-blue-500 focus:ring-blue-500`}
                  />
                  <input
                    type="date"
                    value={filters.endDate}
                    onChange={(e) => handleFilterChange('endDate', e.target.value)}
                    className={`w-full rounded-md shadow-sm 
                      ${isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'}
                      border focus:border-blue-500 focus:ring-blue-500`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Purchase Rate Chart */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Purchase Rate by Model</h2>
            <div className="overflow-x-auto">
              <BarChart width={500} height={300} data={purchaseData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="name" stroke={isDarkMode ? '#9CA3AF' : '#4B5563'} />
                <YAxis stroke={isDarkMode ? '#9CA3AF' : '#4B5563'} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#1F2937' : 'white',
                    border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                    color: isDarkMode ? 'white' : 'black'
                  }}
                />
                <Legend />
                <Bar dataKey="purchases" fill={isDarkMode ? '#60A5FA' : '#3B82F6'} />
              </BarChart>
            </div>
          </div>

          {/* Condition Distribution */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              New vs Used Distribution
            </h2>
            <PieChart width={400} height={300}>
              <Pie
                data={conditionData}
                cx={200}
                cy={150}
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  name,
                }) => {
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                  return (
                    <text
                      x={x}
                      y={y}
                      fill={isDarkMode ? "white" : "black"}
                      textAnchor="middle"
                      dominantBaseline="central"
                    >
                      {`${name} ${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {conditionData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={isDarkMode ? DARK_COLORS[index % DARK_COLORS.length] : COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDarkMode ? '#1F2937' : 'white',
                  border: `1px solid ${isDarkMode ? '#374151' : '#E5E7EB'}`,
                  color: isDarkMode ? 'white' : 'black'
                }}
              />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};