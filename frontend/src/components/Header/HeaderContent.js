import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContent = () => {
  return (
    <li>
        <Link to="/Login"> Login</Link>
        <Link to="/Product"> Products   </Link>
    </li>
  );
};

export default HeaderContent;