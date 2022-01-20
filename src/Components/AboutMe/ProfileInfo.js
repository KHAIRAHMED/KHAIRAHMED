import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutInfo from './AboutInfo';
import Education from './Education';
import Skills from './Skills';

const ProfileInfo = () => {
    const [about , setAbout ] = useState("info")
    const handleClick = (event) => {
        setAbout(event)

    }
    return (
            <div className="">
                <div className="btn-toolbar mb-3 d-flex justify-content-center" role="toolbar" aria-label="Toolbar with Link groups">
                    <div className="btn-group btn-group-lg mr-2" role="group" aria-label="First group">
                        <Link to="" className="btn btn-dark me-3" onClick={()=>handleClick("info")}>About Me</Link>
                        <Link to="" className="btn btn-dark  me-3"onClick={()=>handleClick("skills")} >Skills</Link>
                        <Link to="" className="btn btn-dark  me-3"onClick={()=>handleClick("education")} >Education</Link>
                    </div>
                </div>
                <div className="ms-5">   
                { 
                    about==="info" && <AboutInfo />
                }                                     
                { 
                    about==="skills" && <Skills />
                }                                     
                { 
                    about==="education" && <Education />
                }                                                
                  
                </div>
            </div>
    );
};

export default ProfileInfo;