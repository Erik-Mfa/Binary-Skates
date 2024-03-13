import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import AdminPage from './pages/admin';
import LoginPage from './pages/login';
import OrderPage from './pages/order';
import ProductPage from './pages/product';
import ProtectedRoute from './components/ProtectedRoute';

export default function RoutesConfig({checkAdmin, checkAuthenticated}) {
    return (
        
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
    
            {/* the admin route leads to the protected route component, which validates the user */}
            <Route 
                path="/admin" 
                element={
                <ProtectedRoute 
                isAllowed={checkAdmin} 
                isAuthenticated={checkAuthenticated}
                redirectTo='/home'>
                    <AdminPage/>
                </ProtectedRoute>
            }/>
            

            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        
    );
}
