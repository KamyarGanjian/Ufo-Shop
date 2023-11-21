import React from 'react';
import './Navbar.css';
import { TbUfo } from "react-icons/tb";

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href='/' className='site-title'><TbUfo className='icon' />Ufo-Shop</a>
            <ul>
                <li className='active'>
                    <a href='/pricing'>Pricing</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar