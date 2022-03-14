import React from 'react';
import "../companents/navbar.scss"
import { Link, NavLink, Outlet, } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className='navbar container'>
           <Link to="/home" className='navbar__logo'>LOGO</Link>
           <ul className='Navbar__menu menu'>
              <li className='menu__item'>
                  <NavLink className={(props)=> props.isActive ?"menu__item__link--active":"menu__item__link"} to='/Home'>Home </NavLink>
              </li>
              <li className='menu__item'>
                  <NavLink className={(props)=> props.isActive ?"menu__item__link--active":"menu__item__link"} to='/contacts'>Contacts</NavLink>
              </li>
              <li className='menu__item'>
                  <NavLink className={(props)=> props.isActive ?"menu__item__link--active":"menu__item__link"} to='/About'>About</NavLink>
              </li>
              <li className='menu__item'>
                  <NavLink className={(props)=> props.isActive ?"menu__item__link--active":"menu__item__link"} to='/blog'>Blog</NavLink>
              </li>
           </ul>
          
        </header>
    );
}

export default Navbar;
