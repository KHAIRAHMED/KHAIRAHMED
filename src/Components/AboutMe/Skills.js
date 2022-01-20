import React, { useContext } from 'react';
import { ThemeContext } from '../Shared/Context';

const Skills = () => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className={darkMode?"text-white":"text-dark font-weight-bold"}>
            <h2>My Skills</h2>
            <div className="mt-3">
                <h3>Experts</h3>
                <button className="btn btn-light disabled me-2 mt-2">JavaScript</button>
                <button className="btn btn-light disabled me-2 mt-2">React</button>
                <button className="btn btn-light disabled me-2 mt-2">Bootstrap</button>
                <button className="btn btn-light disabled me-2 mt-2">CSS | CSS-3</button>
                <button className="btn btn-light disabled me-2 mt-2">HTML | HTML-5</button>
                <button className="btn btn-light disabled me-2 mt-2">Material UI</button>
                <button className="btn btn-light disabled me-2 mt-2">React-Bootstrap</button>
            </div>
            <div className="mt-3">
                <h3>Comfortable</h3>
                <button className="btn btn-light disabled me-2 mt-2">Rest-API</button>
                <button className="btn btn-light disabled me-2 mt-2">Heroku</button>
                <button className="btn btn-light disabled me-2 mt-2">Firebase Auth</button>
                <button className="btn btn-light disabled me-2 mt-2">Firebase Hosting</button>
                <button className="btn btn-light disabled me-2 mt-2">Netlify</button>
            </div>
            <div className="mt-3">
                <h3> Familiar</h3>
                <button className="btn btn-light disabled me-2 mt-2">Express JS</button>
                <button className="btn btn-light disabled me-2 mt-2">MongoDB</button>
                <button className="btn btn-light disabled me-2 mt-2">Python</button>
                <button className="btn btn-light disabled me-2 mt-2">C</button>
            </div>
            <div className="mt-3">
                <h3 className="">Tools</h3>
                <button className="btn btn-light disabled me-2 mt-2">Git</button>
                <button className="btn btn-light disabled me-2 mt-2">GitHub</button>
                <button className="btn btn-light disabled me-2 mt-2">NPM</button>
                <button className="btn btn-light disabled me-2 mt-2">VS-Code</button>
                <button className="btn btn-light disabled me-2 mt-2">Chrome-Dev Tool</button>
            </div>
        </div>
    );
};

export default Skills;