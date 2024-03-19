import {React, useEffect} from 'react';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { isAdmin, isAuthenticated } from '../services/auth';


export default function HomePage({authentication}) {
    const auth = authentication;

    const admin = isAdmin();
    const authenticated = isAuthenticated();

    if(auth){
        authentication(admin, authenticated)
    }

    console.log("Home page admin: " + admin);

    return (
        <div>
            <Header />
            <Sidebar />
        </div>
    )

}