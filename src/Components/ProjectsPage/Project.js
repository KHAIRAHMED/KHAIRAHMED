import React from 'react';
import Title from '../Shared/Title';
import carHome1 from "../../images/car-home-1.PNG"
import carHome2 from "../../images/car-home-2.PNG"
import carHome3 from "../../images/car-home-3.PNG"
import carDashboard from "../../images/car-repair-dashboard.png"
import carReview from "../../images/car-repair-review.png"
import carService from "../../images/car-repair-service.png"


import portalHome1 from "../../images/portal-home-1.PNG"
import portalHome2 from "../../images/portal-home-2.PNG"
import portalHome3 from "../../images/portal-home-3.PNG"
import portalAppointment1 from "../../images/portal-home-4.PNG"
import portalAppointment2 from "../../images/portal-appointment-1.PNG"
import portalAppointment3 from "../../images/portal-appointment-2.PNG"



import ProjectLIst from './ProjectLIst';

const projectData = [
    { 
        name : "Car Repair BD",
        description : "A Single page Application with Dashboard  where people can book  and see there previous booking list and they can give there review. Any admin can edit and delete previous booking from dashboard. Admin also add another member as a admin . admin can add new service .. if the buyer buy service they can use visa card for this service . Yeah ! if User want to  login they can use google or email auth authentication   . Finally this is Online base a CAR SERVICE application.",
        technology : ["JavaScript" , "React" , "Express" , "Node", "MongoDB" , "Heroku" , "Netlify","Bootstrap" , 
        "HTML5", "CSS3", "Firebase"],
        liveLink : "https://car-repair-bd.web.app",
        clientSite : "https://github.com/KHAIRAHMED/Car-Repair-BD",
        serverSite : "https://github.com/KHAIRAHMED/Car-Repair-BD-Server",

        image : {
            img1 : carHome1,
            img2 : carHome2,
            img3 : carHome3,
            img4: carDashboard,
            img5 : carReview,
            img6 : carService,
        }

    },
    { 
        name : "Doctors-Portal",
        description : "This is the online base doctors appointment application . In this application patient can take a appointment from the doctor by the application . they can see today or selected date appointment if they want . then also give a review doctors and their management . in this application has a dashboard option .. patient can see their today or previous appointment form the dashboard option . Admin can add  a doctor ",
        technology : ["JavaScript" , "React" , "Express" , "Node", "MongoDB" , "Heroku" , "Netlify","Bootstrap" , 
        "HTML5", "CSS3", "Firebase"],
        liveLink : "https://doctorsportalproject.web.app",
        clientSite : "https://github.com/KHAIRAHMED/Doctors-Portal-Client",
        serverSite : "https://github.com/KHAIRAHMED/Doctors-Portal-Server",

        image : {
            img1 : portalHome1,
            img2 : portalHome2,
            img3 : portalHome3,
            img4 : portalAppointment1,
            img5 : portalAppointment2,
            img6 : portalAppointment3,
        }

    },
]
const Project = () => {
    return (
        <div style={{ overflow: "hidden" }} className='mt-4'>
            <Title title="Projects" subTitle=""/>
            <div className="row pt-3">
                { 
                    projectData.map(project => <ProjectLIst project={project} />)
                }
            </div>
        </div>
    );
};

export default Project;