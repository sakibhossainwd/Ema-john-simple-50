// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
            <a href="/Order">Order</a>
            <a href="/Order Review">Order Review</a>
            <a href="/Manage Inventoy">Manage Inventoy</a>
            <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;