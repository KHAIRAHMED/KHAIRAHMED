import React from 'react';
import { Link } from 'react-router-dom';

const LargeButton = ({style}) => {
    const { link , title} = style
    return (
        <div >
        <Link to={`/${link}`} className="btn btn-info ">{title}</Link>
    </div>
    );
};

export default LargeButton;