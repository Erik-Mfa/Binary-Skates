import React, { useState } from 'react';
import { login } from '../../services/auth';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(credentials);
      
      navigate("/home");
    } catch (error) {
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          type="button"
          id="button"
          onClick={handleLogin}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;