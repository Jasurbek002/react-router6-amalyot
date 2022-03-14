import React from 'react';
import "../Laoutes/noadmin.scss"
import {Link, NavLink, } from 'react-router-dom'
const Nonavbar = () => {
    return (
        <div className='authnavbar'>
             <Link to="login" className='authnavbar__logo' >LOGO</Link>
           <ul className='nav'>
              
                   <NavLink to="login" className="nav__login">LOGin</NavLink>
                 
               
           </ul>
        </div>
    );
}

export default Nonavbar;
