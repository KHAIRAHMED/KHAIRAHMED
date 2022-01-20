import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const [successOrError, setSuccessOrError] = useState({
    })
    const formRef = useRef()
    const sendEmail = e => {
        e.preventDefault()
        emailjs.sendForm('service_bw2x1kf', 'template_gfdtig7', formRef.current, 'user_b0MMH8Hr8HSBCqZIbToL0')
            .then((result) => {
                if (result.status === 200) {
                    const newSuccessError = { ...successOrError }
                    newSuccessError.success = true
                    newSuccessError.error = false
                    setSuccessOrError(newSuccessError)
                }
            }, (error) => {
                const newSuccessError = { ...successOrError }
                newSuccessError.success = false;
                newSuccessError.error = true
                setSuccessOrError(newSuccessError)
            });

            e.target.reset()
    }
    return (
        <form className="w-100" ref={formRef} onSubmit={sendEmail}>
            <div className="row d-flex justify-content-center" >
                <div className="col-md-6">
                    <div className="mb-3 ">
                        <input type="text" className="form-control" name="from_name" required placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="from_subject" required placeholder="Subject*" />
                    </div>
                    <div className="mb-3 ">
                        <input type="email" className="form-control" name="from_email" required placeholder="Email Address*" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="mb-3 ">
                        <textarea class="form-control" rows="6" name="message" required placeholder="Your Message*"></textarea>
                    </div>
                </div>
            </div>
            <button className="btn btn-outline-info">Submit</button>
            <div className="mt-3">
                {
                    successOrError.success && <p className="text-primary">Your Message Submitted</p> 
                }
                {
                    successOrError.error && <p className="text-danger">Error Find ! Please Again Submit Your Message</p> 
                }
            </div>
        </form>
    );
};

export default ContactForm;