import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'
import profile from "../../images/khairahmed.png"

const Profile = () => {
    return (
        <div className="d-flex justify-content-center ">
            <div className="">
                <img src={profile} alt="profile-img" className="profile" />
                <h3 className="text-info">KHAIR AHMED</h3>
                <h4 className="text-success fw-bold mt-3">
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
                <Link to="contact" className="btn btn-outline-info mb-3">Contact</Link>
            </div>
        </div>
    );
};

export default Profile;