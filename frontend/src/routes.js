import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import Login from './pages/login';
import Order from './pages/order';
import Product from './pages/product';
import ProtectedRoute from './components/ProtectedRoute';

export default function RoutesConfig({checkAdmin, checkAuthenticated}) {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
    
            {/* the admin route leads to the protected route component, which validates the user */}
            <Route 
                path="/admin" 
                element={
                <ProtectedRoute 
                isAllowed={checkAdmin} 
                isAuthenticated={checkAuthenticated}
                redirectTo='/home'>
                    <Admin/>
                </ProtectedRoute>
            }/>
            

            <Route path="/product/:id" element={<Product />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        
    );
}
