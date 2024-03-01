import React, { useState } from 'react';
import axios from 'axios';

export const Admin = () => {
  const [users, setUsers] = useState({ name: '', email: '', phone: '', adress: '', admin: '', password: '' });
  
    const userPost = async () => {
    try {  
      const userResponse = await axios.post('http://localhost:3001/user', users);
      console.log(userResponse)
        
    } catch (error) {
        console.error('Error fetching orders:', error.message);
    }
    };

    

  return (
    <div className="max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
      <form>
        <div className="mb-4">
          <h1>Create User</h1>       
          <label htmlFor="user" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="user"
            placeholder="Enter username"
            onChange={(e) => setUsers({ ...users, name: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your password"
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="number"
            id="phone"
            placeholder="Enter phone"
            onChange={(e) => setUsers({ ...users, phone: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />

        <div className="mb-4">
          <label htmlFor="adress" className="block text-sm font-medium text-gray-700">Adress</label>
          <input
            type="text"
            id="adress"
            placeholder="Enter your password"
            onChange={(e) => setUsers({ ...users, adress: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="admin" className="block text-sm font-medium text-gray-700">Admin</label>
          <input
            type="text"
            id="admin"
            placeholder="Enter your password"
            onChange={(e) => setUsers({ ...users, admin: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="passowrd" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        </div>

        <button
          type="button"
          onClick={userPost}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Admin;