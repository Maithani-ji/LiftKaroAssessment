// src/services/apiService.ts

import axios from 'axios';


// Base API configuration
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create an Axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define a type for the posts data
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


apiClient.interceptors.request.use(
  async (config) => {
    try {
      // Log the outgoing request
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
      
    } catch (error) {
      console.error('Error in request interceptor:', error);
    }
    return config;
  },
  (error) => {
    console.error(' API Request Error:', error);
    return Promise.reject(error);
  }
);


apiClient.interceptors.response.use(
  (response) => {
    // Log a successful response
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    // Log and handle API errors
    console.error('API Response Error:', error.response?.status, error.message);
  
    
    return Promise.reject(error);
  }
);


export const apiService = {

  fetchPosts: async (limit: number = 10): Promise<Post[]> => {
    try {
      const response = await apiClient.get(`/posts?_limit=${limit}`);
      return response.data;
    } catch (error: any) {
      // Re-throw with a more descriptive message
      throw new Error(`Failed to fetch posts: ${error.message}`);
    }
  },


};
