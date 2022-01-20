import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './Context';

const Footer = () => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="text-center pb-5">
            <p className={darkMode?"text-white":"text-dark"}>Copyright @{new Date().getFullYear()} <Link to="https://github.com/KHAIRAHMED">KHAIR AHMED</Link> ||
            All Rights Reserve
            
            </p>
        </div>
    );
};

export default Footer;