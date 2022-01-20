import React, { useState } from 'react';
import "./Toogle.css"
import { useContext } from 'react';
import { ThemeContext } from './../Context';
const Toggle = () => {
    const [toggle , setToggle ] = useState()
    const theme = useContext(ThemeContext)
    const toggleButton = () => {
        theme.dispatch({type : "TOGGLE"})
    }
    return (
        <div >
            <label class="switch">
                <input type="checkbox" onClick={toggleButton} />
                <span class="slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;