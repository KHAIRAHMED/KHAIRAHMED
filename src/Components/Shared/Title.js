import React, { useContext } from 'react';
import { ThemeContext } from './Context';

const Title = ({title ,subTitle}) => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="text-center">
        <h3 className={darkMode?"text-white":"text-dark"} style={{ borderBottom: "5px solid red", display: "inline" }}>{title}</h3>
        <p className={darkMode?"text-white":"text-dark"} style={{marginTop:"7px"}}>{subTitle}</p>
    </div>
    );
};

export default Title;