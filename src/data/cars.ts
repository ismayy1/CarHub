import { Car } from '../types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CarStore {
  cars: Car[];
  addCar: (car: Omit<Car, 'id'>) => void;
  removeCar: (id: string) => void;
  updateCar: (id: string, car: Omit<Car, 'id'>) => void;
}

// Default cars data
const defaultCars: Car[] = [
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
  }
];

export const useCarStore = create<CarStore>()(
  persist(
    (set) => ({
      cars: defaultCars,
      addCar: (newCar) =>
        set((state) => ({
          cars: [
            {
              ...newCar,
              id: Math.random().toString(36).substr(2, 9),
            },
            ...state.cars,
          ],
        })),
      removeCar: (id) =>
        set((state) => ({
          cars: state.cars.filter((car) => car.id !== id),
        })),
      updateCar: (id, updatedCar) =>
        set((state) => ({
          cars: state.cars.map((car) =>
            car.id === id ? { ...updatedCar, id } : car
          ),
        })),
    }),
    {
      name: 'car-storage',
      storage: localStorage,
    }
  )
);