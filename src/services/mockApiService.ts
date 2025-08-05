// src/services/mockApiService.ts


  
  interface Gym {
    id: number;
    name: string;
    address: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    phone: string;
    hours: string;
  }
  
  // Mock data to simulate API responses
  export const mockData = 
    
     [
      {
        id: 1,
        name: "LiftKaro Downtown",
        address: "123 Main Street, Downtown",
        coordinates: {
          latitude: 37.78825,
          longitude: -122.4324
        },
        phone: "+1 (555) 123-4567",
        hours: "5:00 AM - 11:00 PM"
      },
      {
        id: 2,
        name: "LiftKaro Uptown",
        address: "456 Oak Avenue, Uptown",
        coordinates: {
          latitude: 37.79025,
          longitude: -122.4344
        },
        phone: "+1 (555) 765-4321",
        hours: "6:00 AM - 10:00 PM"
      },
      {
        id: 3,
        name: "LiftKaro Bayview",
        address: "789 Marina Blvd, Bayview",
        coordinates: {
          latitude: 37.77855,
          longitude: -122.3995
        },
        phone: "+1 (555) 987-6543",
        hours: "24/7"
      },
    ]

  
  // Mock API service functions with simulated delays
  export const mockApiService = {
  
    fetchGyms: async (): Promise<Gym[]> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockData;
    },
  };
  