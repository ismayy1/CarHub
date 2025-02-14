import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';
import { Fuel, Car as CarIcon, Gauge } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Link to={`/car/${car.id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <img
          src={car.imageUrl}
          alt={`${car.make} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {car.make} {car.model}
            </h3>
            <span className="px-2 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
              {car.condition}
            </span>
          </div>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            ${car.price.toLocaleString()}
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <CarIcon size={16} />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Gauge size={16} />
              <span>{car.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center gap-1">
              <Fuel size={16} />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{car.transmission}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};