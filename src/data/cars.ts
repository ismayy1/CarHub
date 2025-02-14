import { create } from 'zustand';
import type { Car } from '../types';

const initialCars: Car[] = [
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
  // //////////////////////////////////////////////////////////////////////
  {
    id: '5',
    make: 'BMW',
    model: 'X6',
    year: 2024,
    price: 43000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://i.ytimg.com/vi/sHCb0vbzsyw/sddefault.jpg',
    condition: 'New'
  },
  {
    id: '6',
    make: 'BMW',
    model: 'X6',
    year: 2025,
    price: 50000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://vehicle-images.dealerinspire.com/dc99-18003200/5YM23ET03R9V87058/2b565ba69de2f133023f82d24f86ed5a.jpg',
    condition: 'New'
  },
  {
    id: '7',
    make: 'BMW',
    model: 'X6',
    year: 2022,
    price: 53000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://s3-eu-west-1.amazonaws.com/lshro/files/products/f198ca2f-98ac-48d7-ba5a-67d415be6111-732.jpg',
    condition: 'New'
  },
  {
    id: '8',
    make: 'Mercedes-Benz',
    model: 'Xs',
    year: 2023,
    price: 49000,
    mileage: 54000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://img.sm360.ca/images/article/humberviewgroup-941/114236//410908_2021_mercedes-benz_gle-class1684437019338.jpg',
    condition: 'Used'
  },
  {
    id: '9',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2025,
    price: 55000,
    mileage: 0,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-123-1642184026.jpg?crop=0.458xw:0.387xh;0.316xw,0.418xh&resize=2048:*',
    condition: 'New'
  },
  {
    id: '10',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2024,
    price: 48000,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://di-uploads-pod3.dealerinspire.com/fletcherjonesmbnewport/uploads/2025/01/mercedes-benz-g-class-electric-suv-hub-image-updated-01.png',
    condition: 'New'
  },
  {
    id: '11',
    make: 'Toyota',
    model: 'Rav4',
    year: 2024,
    price: 39000,
    mileage: 10000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://toyotacanada.scene7.com/is/image/toyotacanada/2019_Toyota_RAV4_XSE_HV_BlizzardPearl_04?ts=1688693854571&$Media-Large$&dpr=off',
    condition: 'Used'
  },
  {
    id: '12',
    make: 'Toyota',
    model: 'Rav4',
    year: 2023,
    price: 48000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://cdn.mattaki.com/toyota/page-builder/content-pieces/44ebc4d1-bc0f-4680-a2b1-bd22f97f626e/4d91d913-8ec6-418a-9ba4-3f528e390904.webp',
    condition: 'New'
  },
  {
    id: '13',
    make: 'Toyota',
    model: 'C-HR',
    year: 2025,
    price: 37000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://www.wall-street.ro/article_pictures/305723_articol.jpg?v=1709125755',
    condition: 'New'
  },
  {
    id: '14',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    price: 35000,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    condition: 'New'
  },
  {
    id: '15',
    make: 'Toyota',
    model: 'Camry',
    year: 2025,
    price: 33000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://carsguide-res.cloudinary.com/image/upload/c_fit,h_726,w_1290,f_auto,t_cg_base/v1/editorial/story/hero_image/2025-Toyota-Camry-Hybrid-Sedan-Gold-1001x565-(2)_0.jpg',
    condition: 'New'
  },
  {
    id: '16',
    make: 'Toyota',
    model: 'Corolla-E210',
    year: 2023,
    price: 27000,
    mileage: 120000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg/1200px-Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg',
    condition: 'Used'
  },
];

interface CarStore {
  cars: Car[];
  addCar: (car: Omit<Car, 'id'>) => void;
  updateCar: (id: string, car: Partial<Car>) => void;
  deleteCar: (id: string) => void;
}

export const useCarStore = create<CarStore>((set) => ({
  cars: initialCars,
  addCar: (car) =>
    set((state) => ({
      cars: [
        ...state.cars,
        {
          ...car,
          id: Math.random().toString(36).substr(2, 9),
        },
      ],
    })),
  updateCar: (id, updatedCar) =>
    set((state) => ({
      cars: state.cars.map((car) =>
        car.id === id ? { ...car, ...updatedCar } : car
      ),
    })),
  deleteCar: (id) =>
    set((state) => ({
      cars: state.cars.filter((car) => car.id !== id),
    })),
}));

// Export the cars array for components that only need to read the data
export const { cars } = useCarStore.getState();