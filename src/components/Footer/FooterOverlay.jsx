import React from "react";
import "./FooterOverlay.css";
import {FiInstagram, FiTwitter, FiFacebook} from "react-icons/fi"

import Image from "../../constants/image";
const FooterOverlay = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="contactUs">
        <h1 className="p__cormorant" style={{ marginBottom: "2rem" }}>
          Contact Us
        </h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">
          +1 212-344-1230 <br />
          <span>+1 212-555-1230</span>
        </p>
      </div>
      <div className="FooterOverlay_info">
        <img  src={Image.gericht} alt="Gericht Image" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={Image.spoon} alt="" />
        <div className="footerOVerlay_icon">
            <FiInstagram />
            <FiTwitter />
            <FiFacebook />            
        </div>
      </div>
      <div className="FooterOverlay_Hours">
        <h1 className="p__cormorant">
        Working Hours
        </h1>
        <p className="p__opensans">
        Monday-Friday:
        <br />
        08:00 am -12:00 am
        
        </p>
        <p className="p__opensans">
        Saturday-Sunday:
        <br />
        07:00am -11:00 pm
        </p>
      </div>
    </div>
  );
};

export default FooterOverlay;
