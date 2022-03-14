import React from 'react';
import Nonavbar from '../companents/Nonavbar';
import { Outlet } from 'react-router-dom';
import "../Laoutes/noadmin.scss"

const Noadminlaout = () => {
    return (
        <div  className='Noregistireted'>
            <Nonavbar />
         <Outlet />
        </div>
    );
}

export default Noadminlaout;
