import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface Service {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
}

interface ServiceStore {
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => void;
  removeService: (id: string) => void;
  updateService: (id: string, service: Service) => void;
}

const defaultServices: Service[] = [
  {
    id: '1',
    name: 'Oil Change',
    description: 'Regular oil change service to maintain engine health',
    rating: 4.5,
    price: 49.99,
    category: 'Maintenance'
  },
  {
    id: '2',
    name: 'Brake Service',
    description: 'Complete brake inspection and service',
    rating: 4.8,
    price: 199.99,
    category: 'Safety'
  },
  {
    id: '3',
    name: 'Tire Rotation',
    description: 'Professional tire rotation and balancing',
    rating: 4.3,
    price: 29.99,
    category: 'Maintenance'
  },
  {
    id: '4',
    name: 'Engine Tune-up',
    description: 'Comprehensive engine diagnostics and tune-up',
    rating: 4.7,
    price: 299.99,
    category: 'Performance'
  },
  {
    id: '5',
    name: 'AC Service',
    description: 'Air conditioning system check and maintenance',
    rating: 4.4,
    price: 79.99,
    category: 'Comfort'
  }
];

export const useServiceStore = create<ServiceStore>()(
  persist(
    (set) => ({
      services: defaultServices,
      addService: (service) =>
        set((state) => ({
          services: [
            {
              ...service,
              id: Math.random().toString(36).substr(2, 9),
            },
            ...state.services,
          ],
        })),
      removeService: (id) =>
        set((state) => ({
          services: state.services.filter((service) => service.id !== id),
        })),
      updateService: (id, updatedService) =>
        set((state) => ({
          services: state.services.map((service) =>
            service.id === id ? updatedService : service
          ),
        })),
    }),
    {
      name: 'service-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
); 