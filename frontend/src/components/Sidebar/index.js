import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3001/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="fixed w-64 h-screen max-w-xs mx-auto p-4 border border-gray-300 rounded shadow-md">
      <ul>
        <h1>Sidebar</h1>
        {categories.map((category) => (
          <li key={category._id} className="mb-2">
            <Link to={`/category/${category.id}`} className="text-indigo-600 hover:text-indigo-900">
              <p className="font-semibold">Id: {category.id}</p>
              <p>Name: {category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
