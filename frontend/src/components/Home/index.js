import React, { useEffect, useState } from 'react';
import HeaderContent from '../Navbar/index';
import ProductList from '../Product/index';
import OrderList from '../Order/index';
import SidebarList from '../Sidebar/index';
import { isAuthenticated } from '../../services/auth';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const authStatus = await isAuthenticated();
                setAuthenticated(authStatus);
                setIsLoading(false);
                console.log("Auth useEffect: " + authStatus);
            } catch (error) {
                console.error('Error checking authentication:', error.message);
                setIsLoading(false);
            }
        };
        checkAuthentication();
    }, []);

    // If authentication is still being checked, display loading indicator
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If not authenticated, redirect to login page
    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    // If authenticated, render the home page
    return (
        <div>
            <HeaderContent />
            <SidebarList />
            <ProductList />
            <OrderList />
        </div>
    );
}

export default HomePage;
