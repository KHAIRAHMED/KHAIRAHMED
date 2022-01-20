import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import profile from "../../../images/khairahmed.png"
import { ThemeContext } from '../../Shared/Context';
import './About.css'
const About = () => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="row py-3 w-100">
            <div className="col-md-6 d-flex justify-content-center">
                <div>
                    <h3 className={darkMode?"text-white":"text-dark"}>Hi , <br /> I am</h3>
                    <h2 className="text-info fw-bold pt-3"> KHAIR AHMED</h2>
                    <h4 className="text-success fw-bold">
                        <Typical steps={[
                            'Front-End Developer',
                            1000,
                            'Web Developer',
                            1000,
                            'React Developer',
                            1000,
                            'JavaScript Developer',
                            1000,
                        ]}
                            loop={Infinity}
                        />
                    </h4>
                    <p className={darkMode?"text-white":"text-dark"}>Front-End Developer | React Developer</p>
                    <div className="pt-3">
                        <Link to="about" className="me-5 btn btn-danger">About Me</Link>
                        <Link to="contact" className="btn btn-outline-info">Contact</Link>
                    </div>
                </div>

            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src={profile} alt="" className="profile" />
            </div>
        </div>
    );
};

export default About;