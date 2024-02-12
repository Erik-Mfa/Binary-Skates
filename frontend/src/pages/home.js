import React from 'react';
import HomeContent from '../components/Home/HomeContent';
import HeaderContent from '../components/Header/HeaderContent';
import ProductList from '../components/Product/ProductList';
import OrderList from '../components/Order/OrderList';


export default function Home() {
    return (
        <div>
            <HeaderContent />
            <HomeContent />
            <ProductList />
            <OrderList />
        </div>
    )
}