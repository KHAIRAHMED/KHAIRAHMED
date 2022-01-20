import React, { useContext } from 'react';
import phone from "../../images/phone.png"
import gmail from "../../images/gmail.png"
import location from "../../images/location.png"
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Shared/Context';
const ContactInfo = () => {
    const theme =useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div>
            <div className="d-flex ">
                <div>
                    <img src={phone} alt="gmail-logo" style={{ width: "30px" }} />
                </div>
                <div className="text-start ps-3">
                    <h5 className={darkMode?"text-white":"text-dark"}>+8801833994508</h5>
                    <p className="text-info">Open 9am to 10pm</p>
                </div>
            </div>
            <div className="d-flex ">
                <div >
                    <img src={gmail} alt="gmail-logo" style={{ width: "30px" }} />
                </div>
                <div className="text-start ps-3">
                    <h6>
                        <Link to="www.khairahmed234@gmail.com">khairahmed234.@gmail.com</Link>
                    </h6>
                    <p className="text-info">You Can Text Me .. If You Want To Know Something ..</p>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img src={location} alt="gmail-logo" style={{ width: "30px" }} />
                </div>
                <div className="text-start ps-3">
                    <h5 className={darkMode?"text-white":"text-dark"}>BanglaDesh</h5>
                    <p className="text-info">Chittagong , Feni , Fulgazi</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;