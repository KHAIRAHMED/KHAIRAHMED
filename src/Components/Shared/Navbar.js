import React from 'react';
import { Link } from 'react-router-dom';
import facebook from "../../images/facebook.png"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"
import Toggle from './Toogle/Toggle';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success w-100">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-warning" to="/">KA</Link>
                <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item fw-bold">
                            <Link className="nav-link text-white fw-bold pe-4 text-white" to="/">Protfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold pe-4" to="/projects">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold pe-4" to="/blogs">Blog</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-white fw-bold pe-4" to="/about">About</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold pe-4" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold pe-4" rel="noreferrer" target="_blank"  href="https://drive.google.com/file/d/1GXmTOBJLEU01hbxG9dC9NzmsUT0PVVhG/view">Resume</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold pe-4" href="https://github.com/KHAIRAHMED" rel="noreferrer" target="_blank">
                                <img src={github} style={{width:"30px"}} alt="github-link-logo" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold pe-4" href="https://web.facebook.com/ka.chowdhary.3" rel="noreferrer" target="_blank">
                                    <img src={facebook} style={{width:"30px"}} alt="facebook-link-logo" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold pe-4" href="https://www.linkedin.com/in/khair-ahmed/" rel="noreferrer" target="_blank" >
                                <img src={linkedin} style={{width:"30px"}} alt="linked-link-logo" />
                                </a>
                            </li>
                            <li className="nav-item pe-4 m-auto">
                                <Toggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;