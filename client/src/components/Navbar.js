import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar= () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
            <a className="brand-logo">Routerz</a>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </div>
        </nav>
    )
   
}

export default Navbar;