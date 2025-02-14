export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  imageUrl: string;
  condition: 'New' | 'Used';
  description?: string;
  features?: string[];
  specifications?: {
    engine?: string;
    power?: string;
    acceleration?: string;
    topSpeed?: string;
  };
}

export interface User {
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  category: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  availableTimes: string[];
  contactInfo: {
    phone: string;
    email: string;
  };
}

export interface Appointment {
  id: string;
  serviceId: string;
  userId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}