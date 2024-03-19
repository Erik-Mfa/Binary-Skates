import {React, useEffect, useState} from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { isAdmin, isAuthenticated } from '../services/auth';


export default function HomePage({authentication}) {

    useEffect(() => {
        
            const admin = isAdmin();
            const authenticated = isAuthenticated();

            authentication(admin, authenticated)

            console.log("Home page admin: " + admin);

    }, []);

    return (
        <div>
            <Header />
            <Sidebar />
        </div>
    )

}