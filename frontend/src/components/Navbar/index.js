import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useFloating} from '@floating-ui/react';

const Navbar = () => {
  const {refs, floatingStyles} = useFloating();

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
          <Link to="/login" className="text-white hover:text-gray-200">Skateboards</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-200">Footwear</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-gray-200">Sale</Link>
        </li>

      </ul>
    </nav>
  </div>
  );
};

export default Navbar;
