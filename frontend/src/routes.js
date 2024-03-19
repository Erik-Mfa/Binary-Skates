import {React, useEffect, useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import AdminPage from './pages/admin';
import LoginPage from './pages/login';
import OrderPage from './pages/order';
import ProductPage from './pages/product';
import ProtectedRoute from './components/ProtectedRoute';
import CreateUser from './components/Admin/CreateUser';

export default function RoutesConfig() {
    const [checkAdmin, setCheckAdmin] = useState(false)
    const [checkAuthenticated, setCheckAuthenticated] = useState(false)

    async function authentication(admin, auth) {
        await setCheckAdmin(admin)
        await setCheckAuthenticated(auth)

        console.log("Route page admin: "+ admin)
    }
    
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage authentication={authentication}/>} />
    
            {/* the admin route leads to the protected route component, which validates the user */}
            <Route 
                path="/admin" 
                element={
                    // Route authentication component
                    <ProtectedRoute 
                        isAllowed={checkAdmin} 
                        isAuthenticated={checkAuthenticated}
                        redirectTo='/home'> 
                            {/* Admin page rendered after validation */}
                            <AdminPage />
                    </ProtectedRoute>
                }
            >
                {/* Sub-Routes vvvvvvvvvvvvvvvvv */}
                <Route path="create" element={<CreateUser />} />
            </Route>

            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
