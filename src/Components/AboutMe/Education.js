import React from 'react';
import "./Education.css"
const Education = () => {
    return (
        <div class="card mt-5 p-4 ms-5">
            <div class="container">
                <h4>Diploma in Telecommunication Engineering</h4>
                <p className="mt-3" style={{
                    backgroundColor: "green", color: "white", display: "inline"
                    , padding: "3px", borderRadius: "5px"
                }}>August 2018 to August 2022</p>
                <h6 className="text-secondary mt-3">
                    I am studying Diploma in-Engineering Telecommunication Technology at Feni Computer Institute. I am a React web Application Developer.
                    <br />
                    Expert in developing Single Page Application(SPA) using React.js. I have a good knowledge in the Javascript, ES6, Bootstrap ,Material UI and also Familiar with , Express.js , MongoDB,C,Python.
                    
                </h6>

            </div>
        </div>
    );
};

export default Education;