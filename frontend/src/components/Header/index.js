import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';
import Cookies from 'universal-cookie';
import Navbar from '../Navbar/index';

const Header = () => {
    const navigate = useNavigate(); 
    const [authenticated, setAuthenticated] = useState("");

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const authName = await isAuthenticated();//CHECK JWT COOKIE
                setAuthenticated(authName);
                // setIsLoading(false);
            } catch (error) {
                console.error('Error checking authentication:', error.message);
                // setIsLoading(false);
            }
        };
        checkAuthentication();
    }, []);

    
    const useLogout = () => { 
    try {
        const cookies = new Cookies();
        cookies.remove('jwt_authorization');
        setAuthenticated("")
        navigate('/home');
    } catch (error) {
        console.error('Logout failed:', error.message);
        throw error;
    }
    };

    return (
    <header className="bg-indigo-500 p-4">
        <div className="container mx-auto">
        <ul className="flex space-x-4 mx-auto">
            <Link to="/home" className="text-white text-xl font-bold mr-auto">Binary</Link>

            <Navbar/>

            <li>
                <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            </li>
            {authenticated.admin ?
            <li>
                <Link to="/admin" className="text-white hover:text-gray-200">Admin</Link>
            </li> : ""
            }
            <li>
                <button onClick={useLogout} className="text-white hover:text-gray-200">Logout</button>
            </li>
            {authenticated ? 
            <li className='text-sm'>Welcome, {authenticated.name}</li> : ""}
        </ul>
        </div>
    </header>
    );
};

export default Header;
