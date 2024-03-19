import React from 'react';
import { Outlet } from 'react-router-dom';
// import CreateUser from '../components/Admin/CreateUser';
import AdminSidebar from '../components/Admin/AdminSidebar';
import Header from '../components/Header/index';

export default function AdminPage() {
    
    return(
        <>
        <Header/>
        <AdminSidebar/>

        <Outlet />
        
        </>
        )
                
    
}