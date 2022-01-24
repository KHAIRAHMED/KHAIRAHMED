import React from 'react';
import css from "../../images/css.jpg"
import js from "../../images/js.jpg"
import react from "../../images/react.jpg"
import html from "../../images/html.jpg"
import Title from '../Shared/Title';
import Blog from './Blog';


const blogData = [
    { image: css, link: "", id: 6 },
    { image: html, link: "", id: 7 },
    { image: react, link: "", id: 8 },
    { image: js, link: "", id: 9 },
]
const BlogsPage = () => {
    return (
        <div>
            <div className="pt-5">
                <Title title="My Blogs" subTitle="I am trying to write write what i know about this technology .. You can see this .." />
            </div>
            <div className="d-flex justify-content-center pb-5 pt-2">
                <div className="row w-75" >
                    {
                        blogData.map(blog => <Blog blog={blog} key={blog.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;