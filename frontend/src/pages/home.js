import React, { useEffect, useState } from 'react';
import HeaderContent from '../components/Navbar/index';
import ProductList from '../components/Product/index';
import OrderList from '../components/Order/index';
import SidebarList from '../components/Sidebar/index';
import { isAuthenticated } from '../services/auth';
import { Navigate } from 'react-router-dom';

export default function Home() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const authStatus = await isAuthenticated();//coming as false but its true
                console.log(authStatus)
                setAuthenticated(authStatus);
                
                if (!authenticated) {
                    return <Navigate to="/login" />;
                }

            } catch (error) {
                console.error('Error checking authentication:', error.message);
            }
        };
        
        checkAuthentication();
    }, []);

    console.log(authenticated);



    return (
        <div>
            <HeaderContent />
            <SidebarList />
            <ProductList />
            <OrderList />
        </div>
    )
}