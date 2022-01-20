import React from 'react';
import img from "../../../images/khairahmed.png"
import Slider from "react-slick";
import Title from '../../Shared/Title';
import Blogs from './Blogs';
import LargeButton from './../../Shared/LargeButton';

const blogData = [
    { image: img, link: "", id: 6 },
    { image: img, link: "", id: 7 },
    { image: img, link: "", id: 8 },
    { image: img, link: "", id: 9 },
]
const BlogList = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
        ]
    };
    const style = {
        width: "75%",
        link: "blogs",
        title: "More Blogs..."
    }
    return (
        <div style={{ overflow: "hidden" }} className="py-5">
            <Title title="Blogs" subTitle="Some Blogs I Wrote" />
            <div className="mt-4 d-flex justify-content-center">
                <div className="row w-75" >
                    <Slider {...settings}>
                        {
                            blogData.map(blog => <Blogs blog={blog} key={blog.id} />)
                        }
                    </Slider>
                </div>
            </div>
            <div className="text-center pt-4">
                <LargeButton style={style} />
            </div>
        </div>
    );
};

export default BlogList;
