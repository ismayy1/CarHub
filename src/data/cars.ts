import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 35000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
    condition: 'New'
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
    condition: 'Used'
  },
  {
    id: '3',
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 42000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    condition: 'Used'
  },
  {
    id: '4',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    price: 48000,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    condition: 'New'
  },
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 35000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
    condition: 'New'
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
    condition: 'Used'
  },
  {
    id: '3',
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 42000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    condition: 'Used'
  },
  {
    id: '4',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    price: 48000,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    condition: 'New'
  },
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 35000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
    condition: 'New'
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    mileage: 1000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
    condition: 'Used'
  },
  {
    id: '3',
    make: 'BMW',
    model: '3 Series',
    year: 2022,
    price: 42000,
    mileage: 5000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
    condition: 'Used'
  },
  {
    id: '4',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    price: 48000,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    condition: 'New'
  },
];

// Define and export useCarStore
export const useCarStore = () => {
  return {
    cars, // Return the cars array or any other data
    // Add other functions or state as needed
  };
};