import React, { useContext } from 'react';
import { ThemeContext } from './Context';

const Footer = () => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="text-center pb-5">
            <p className={darkMode?"text-white":"text-dark"}>Copyright @{new Date().getFullYear()} <a href="https://github.com/KHAIRAHMED" rel="noreferrer" target="_blank">KHAIR AHMED</a> ||
            All Rights Reserve
            
            </p>
        </div>
    );
};

export default Footer;