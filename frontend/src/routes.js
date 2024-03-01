import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import Login from './pages/login';
import Order from './pages/order';
import Product from './pages/product';

export default function RoutesConfig() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        
    );
}