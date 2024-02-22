import React from 'react';
import HeaderContent from '../components/Navbar/index';
import ProductList from '../components/Product/index';
import OrderList from '../components/Order/index';
import SidebarList from '../components/Sidebar/index';


export default function Home() {
    return (
        <div>
            <HeaderContent />
            <SidebarList />
            <ProductList />
            <OrderList />
        </div>
    )
}