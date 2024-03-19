import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {

    return (
        <div className="fixed w-64 h-screen max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
          <nav className="flex justify-center items-center">
    
          <ul>
            <li className="mb-2">
              <Link to="/admin/create" className="text-indigo-600 hover:text-indigo-900">Create User</Link>
            </li>
            <li className="mb-2">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-900">Online Users</Link>
            </li>
            <li className="mb-2">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-900">Dashboard</Link>
            </li>
            <li className="mb-2">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-900">All Products</Link>
            </li>
            <li className="mb-2">
              <Link to="/login" className="text-indigo-600 hover:text-indigo-900">Sale</Link>
            </li>
    
          </ul>
        </nav>
      </div>
      );
};

export default AdminSidebar;
