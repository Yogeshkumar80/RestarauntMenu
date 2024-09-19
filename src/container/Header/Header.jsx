// import React from 'react'
import SubHeading from "../../components/SubHeading/SubHeading";
import image from "../../constants/image";
import "./Header.css";
const Header = () => {
  return (
   <div id="Home" className="app__header app__wrapper section__padding ">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour"/>
      <h1 className="app__header-h1">The Key To Fine Dinning hai</h1>
      <p className="p__opensans" style={{margin:"2rem 0"}}>Get all your favorites made with fresh village veggies and pure ingredients. Taste the essence of village life in every delicious bite!</p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
       <img src={image.welcome} alt="" />
    </div>

   </div>
  );
};

export default Header;
