import React from 'react';
import "./HomeProjectList.css"
import { Link } from 'react-router-dom';
const HomeProjectList = ({ project }) => {
    const { projectImage,liveLink , clientSite,serverSite } = project
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="d-flex justify-content-center">
                <div className="project-card">
                    <div className="project-browser">
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                    </div>
                    <Link to="/projects">
                        <img src={projectImage} alt="project-home-page" className="project-image" />
                    </Link>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="">
                    <a  href={liveLink} target="_blank"  rel="noreferrer" className="btn btn-success me-1 mb-1">Web Site</a>
                    <a href={clientSite} target="_blank"  rel="noreferrer" className="btn btn-warning me-1 mb-1">Client Code</a>
                    <a href={serverSite} target="_blank"  rel="noreferrer" className="btn btn-info mb-1"> Server Code</a>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectList;