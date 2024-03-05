import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isAuthenticated } from '../../services/auth';

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-center items-center">

      <ul className="flex space-x-4">
        <li>
          <Link to="/login" className="text-white hover:text-gray-200">New</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-200">Appareal</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-200">Old</Link>
        </li>

      </ul>
    </nav>
  </div>
  );
};

export default Navbar;
