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
  }
  
  export interface User {
    email: string;
    password: string;
    isAdmin: boolean;
  }