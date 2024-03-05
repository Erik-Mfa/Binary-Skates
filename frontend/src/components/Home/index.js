import React from 'react';
import Header from '../Header/index';
import ProductList from '../Product/index';
import OrderList from '../Order/index';
import Sidebar from '../Sidebar/index';

const HomePage = () => {
   return (
        <div>
            <Header />
            <Sidebar />
            <ProductList />
            <OrderList />
        </div>
    );
}

export default HomePage;
