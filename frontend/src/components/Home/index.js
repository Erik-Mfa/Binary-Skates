import React from 'react';
import Navbar from '../Navbar/index';
import ProductList from '../Product/index';
import OrderList from '../Order/index';
import Sidebar from '../Sidebar/index';

const HomePage = () => {
   return (
        <div>
            <Navbar />
            <Sidebar />
            <ProductList />
            <OrderList />
        </div>
    );
}

export default HomePage;
