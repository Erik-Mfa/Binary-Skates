import React from 'react';
import HeaderContent from '../Navbar/index';
import ProductList from '../Product/index';
import OrderList from '../Order/index';
import SidebarList from '../Sidebar/index';

const HomePage = () => {
   return (
        <div>
            <HeaderContent />
            <SidebarList />
            <ProductList />
            <OrderList />
        </div>
    );
}

export default HomePage;
