import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Order from './pages/order';
import Product from './pages/product';

export default function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>Not Found</div>} />
        </Routes>
        
    );
}