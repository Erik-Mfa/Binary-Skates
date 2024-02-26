import axios from 'axios';
import Cookies from 'universal-cookie';
import {jwtDecode} from "jwt-decode";

const BASE_URL = 'http://localhost:3001';
const cookies = new Cookies();

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    cookies.set("jwt_authorization", response.data.token, { path: '/' });
    return response.data.token;
  } catch (error) {
    console.error('Login failed:', error.message);
    throw error;
  }
};

export const isAuthenticated = () => {
  const cookie = cookies.get('jwt_authorization');
  if (!cookie) {
    return false; // No JWT token found
  }
  
  try {
    const decoded = jwtDecode(cookie);
    const id = decoded.user.id;
    return !!id; // Return true if user ID exists
  } catch (error) {
    console.error('Error decoding JWT token:', error.message);
    return false; // Return false in case of decoding error
  }
};