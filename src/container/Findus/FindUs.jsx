import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import Image from "../../constants/image"
import "./FindUs.css";
const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info FindUs">
        <div className="FindUs_Heading">
          <SubHeading title="Contact" />
          <h1 className="headtext__cormorant" style={{marginBottom:"2rem"}}>Find Us</h1>
        </div>
        <p className="p__cormorant" style={{color:"grey"}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h4 className="headtext__cormorant" style={{fontSize:"2rem"}}>Opening Hours</h4>
        <p className="FindUs_time" >Mon - Fri: 10:00am - 2:00 pm</p>
        <p className="FindUs_time">Sat - Sun: 10:00am - 3:00 pm</p>
        <button className="custom__button" style={{margin: "1.5rem 0"}}>Visit Us</button>
      </div>
      <div className="app__wrapper_img">
        <img src={Image.findus} alt="" />

      </div>
    </div>
  );
};

export default FindUs;
