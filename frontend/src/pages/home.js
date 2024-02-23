import React, { useEffect, useState } from 'react';
import HeaderContent from '../components/Navbar/index';
import ProductList from '../components/Product/index';
import OrderList from '../components/Order/index';
import SidebarList from '../components/Sidebar/index';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

export default function Home() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const authStatus = await isAuthenticated();
                setAuthenticated(authStatus);
            } catch (error) {
                console.error('Error checking authentication:', error.message);
            }
        };
        
        checkAuthentication();
    }, []);

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <HeaderContent />
            <SidebarList />
            <ProductList />
            <OrderList />
        </div>
    )
}