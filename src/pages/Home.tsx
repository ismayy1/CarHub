import React, { useState, useMemo } from 'react';
import { useCarStore } from '../data/cars';
import { CarCard } from '../components/CarCard';
import { Filters } from '../components/Filters';

export const Home: React.FC = () => {
  const { cars } = useCarStore();
  const [filters, setFilters] = useState({
    make: '',
    condition: '',
    fuelType: '',
    transmission: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.make && car.make !== filters.make) return false;
      if (filters.condition && car.condition !== filters.condition) return false;
      if (filters.fuelType && car.fuelType !== filters.fuelType) return false;
      if (filters.transmission && car.transmission !== filters.transmission)
        return false;
      if (filters.minPrice && car.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && car.price > Number(filters.maxPrice)) return false;
      return true;
    });
  }, [filters, cars]);

  return (
    <main className="flex-1 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Available Cars ({filteredCars.length})
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
              {filteredCars.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    No cars found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};