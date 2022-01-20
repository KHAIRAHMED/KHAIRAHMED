import React from 'react';
import Profile from './Profile';
import ProfileInfo from './ProfileInfo';

const AboutMe = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="row w-100 py-4">
                <div className="col-md-5">
                    <Profile />
                </div>
                <div className="col-md-7">
                    <ProfileInfo />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;