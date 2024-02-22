import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const login = async (credentials) => {
  try {
    console.log(credentials);
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data.token;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};