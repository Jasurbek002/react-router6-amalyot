import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../companents/Navbar';
const Adminlayote = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Adminlayote;
