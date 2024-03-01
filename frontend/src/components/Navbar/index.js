import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import {useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { isAuthenticated } from '../../services/auth';

const HeaderContent = () => {
  // const navigate = useNavigate(); 
  const [authenticated, setAuthenticated] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const checkAuthentication = async () => {
          try {
              const authName = await isAuthenticated();
              setAuthenticated(authName);
              setIsLoading(false);
              console.log("Nome: " + authName);
          } catch (error) {
              console.error('Error checking authentication:', error.message);
              setIsLoading(false);
          }
      };
      checkAuthentication();
  }, []);

  if (isLoading) {
      return <div>Loading...</div>;
  }
  
  const useLogout = () => { 
    try {
      const cookies = new Cookies();
      cookies.remove('jwt_authorization');
      setAuthenticated(null)
    } catch (error) {
      console.error('Logout failed:', error.message);
      throw error;
    }
  };

    return (
    <header className="bg-indigo-500 p-4">
      <div className="container mx-auto">
        <nav className="flex justify-center items-center">
          <Link to="/home" className="text-white text-xl font-bold mr-auto">Binary</Link>
          <ul className="flex space-x-4">
          {authenticated ? <li>Welcome, {authenticated}</li> : ""}
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            </li>
            <li>
              <Link to="/product" className="text-white hover:text-gray-200">
                Products
              </Link>
            </li>
            <button onClick={useLogout}>
              Logout
            </button>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderContent;
