import React, { useContext } from 'react';
import { ThemeContext } from '../Shared/Context';

const AboutInfo = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="mt-5 ms-2">
            <div className={darkMode ? "text-white" : "text-dark fw-bold"}>
                <h4 className="py-2">
                    Hi, This is Khair Ahmed.
                </h4>

                <p className="fw-bold">
                    A Passionate Web Developer,. I love to play with coding, building software, and focusing on learning new technologies.
                    Handles any part of process with ease. Collaborative team player with excellent technical abilities offering 6 month of related experience.
                </p>
            </div>
        </div>
    );
};

export default AboutInfo;