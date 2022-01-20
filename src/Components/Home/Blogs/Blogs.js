import React from 'react';


const Blogs = ({ blog }) => {
    const { image, link } = blog
    return (
        <div className="me-4">
            <img src={image} style={{ width: "100%" }} alt="" />
            <a target="_blank"  rel="noreferrer" href={link} className="btn btn-success w-100">View Blog</a>
        </div>

    );
};

export default Blogs;