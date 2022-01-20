import React from 'react';
import About from '../About/About';
import BlogList from '../Blogs/BlogLis';
import HomeProject from '../HomeProject/HomeProject';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AboutMe from '../../AboutMe/AboutMe';
const Home = () => {
    return (
        <div>
            {/* <About /> */}
            <AboutMe ></AboutMe>
            <HomeProject />
            <BlogList />
        </div>
    );
};

export default Home;