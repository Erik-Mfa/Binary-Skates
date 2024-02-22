import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
  return (
    <header className="bg-indigo-500 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-center items-center">
          <Link to="/home" className="text-white text-xl font-bold mr-auto">Binary</Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            </li>
            <li>
              <Link to="/product" className="text-white hover:text-gray-200">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderContent;
