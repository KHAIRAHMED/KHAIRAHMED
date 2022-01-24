import React from 'react';

const Blog = ({ blog }) => {
    const { image, link } = blog
    return (
        <div className="col-md-4 col-sm-6">
            <div className="me-3 mt-4">
                <img src={image}  style={{ width: "100%", height: "260px"}} alt="blog-imag" />
                <a target="_blank"  rel="noreferrer" href={link} className="btn btn-success w-100">View Blog</a>
            </div>
        </div>
    );
};

export default Blog;