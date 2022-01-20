import React from 'react';
import image from '../../../images/doctors-portal.png'
import carRepair from '../../../images/car-repair-bd.png'
import HomeProjectList from './HomeProjectList';
import Title from '../../Shared/Title';
import LargeButton from '../../Shared/LargeButton';

const projectData = [
    {
        projectName: "Car Repair BD",
        id: 1,
        projectImage: carRepair,
        liveLink : "https://car-repair-bd.web.app",
        clientSite : "https://github.com/KHAIRAHMED/Car-Repair-BD",
        serverSite : "https://github.com/KHAIRAHMED/Car-Repair-BD-Server",
    },
    {
        projectName: "Doctors Portal",
        id: 2,
        projectImage: image,
        liveLink : "https://doctorsportalproject.web.app",
        clientSite : "https://github.com/KHAIRAHMED/Doctors-Portal-Client",
        serverSite : "https://github.com/KHAIRAHMED/Doctors-Portal-Server",
    }
]
const HomeProject = () => {
    const style = {
        width: "90%",
        link : "projects",
        title : "More Projects..."
    }
    return (
        <div >
            <Title title="Project" subTitle="Projects Which I Did "></Title>
            <div className="mt-3 d-flex justify-content-center">
                <div className="row" style={{ width: "90%" }}>
                    {
                        projectData.map(project => <HomeProjectList project={project} key={project.id} />)
                    }
                </div>
            </div>
            <div className="text-center pt-4">
                <LargeButton style={style} />
            </div>
        </div>
    );
};

export default HomeProject;