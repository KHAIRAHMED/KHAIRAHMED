import React from 'react';
import Title from './../Shared/Title';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
const Contact = () => {
    return (
        <section className="contactFrom-section text-center pb-5" style={{ overflow: "hidden" }}>
            <Title title="Contact Me" subTitle="Let's Keep IN Touch" />
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 col-sm-5 my-3 col-8">
                    <ContactInfo />
                </div>
                <div className="col-md-7 col-sm-6 col-10">
                   <ContactForm />
                </div>

            </div>
        </section>
    );
};

export default Contact;