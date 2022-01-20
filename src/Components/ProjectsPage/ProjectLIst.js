import React, { useContext } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Shared/Context';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
};

const ProjectLIst = ({ project }) => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const { name, clientSite, description, technology, liveLink, serverSite, image } = project
    const [JavaScript, React, Express, Node, MongoDB, Heroku, Netlify, Bootstrap,
        HTML5, CSS3, Firebase] = technology
    const { img1, img2, img3, img4, img5, img6 } = image
    return (
        <div className="row justify-content-center">
            <div className="col-md-6 pb-5">
                <h1 className={darkMode?"text-white text-center":"text-dark text-center"}>{name}</h1>
                <p className={darkMode?"text-white ps-3":"text-dark fw-bold ps-3"}>{description}</p>
                <div className="ps-3">
                    <button className="btn btn-outline-danger me-2 mt-2">{JavaScript}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{React}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{Express}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{Node}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{MongoDB}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{Heroku}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{Netlify}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{Bootstrap}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{HTML5}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{CSS3}</button>
                    <button className="btn btn-outline-danger me-2 mt-2">{Firebase}</button>
                </div>
            </div>
            <div className="col-md-6">
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src={img1} style={{ width: "100%", height: "100%" }} alt={name} />
                        </div>
                        <div>
                            <img src={img2} style={{ width: "100%", height: "100%" }} alt={name} />
                        </div>
                        <div>
                            <img src={img3} style={{ width: "100%", height: "100%" }} alt={name} />
                        </div>
                        <div>
                            <img src={img4} style={{ width: "100%", height: "100%" }} alt={name} />
                        </div>
                        <div>
                            <img src={img5} style={{ width: "100%", height: "100%" }} alt={name} />
                        </div>
                        <div>
                            <img src={img6} style={{ width: "100%", height: "100%" }} alt={name} />
                        </div>
                    </Slider>
                </div>
                     <div className="text-center pb-5">
                        <a href={liveLink} target="_blank"  rel="noreferrer" className="btn btn-info me-1 mb-1">Web Site</a>
                        <a href={clientSite} target="_blank"  rel="noreferrer" className="btn btn-light me-1 mb-1">Client Site</a>
                        <a href={serverSite} target="_blank"  rel="noreferrer" className="btn btn-danger me-1 mb-1">Server Site</a>
                    </div>
            </div>
        </div>
    );
};

export default ProjectLIst;