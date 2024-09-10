// import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import "./Navbar.css"
import image from "../../constants/image"
import { useState } from "react"
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo"><img src={image.gericht} alt="navbar image"/></div>
         <ul className="app__navbar-links">
          <li className="p__opensans"><a href="#">Home</a></li>
          <li className="p__opensans"><a href="#">Page</a></li>
          <li className="p__opensans"><a href="#">Login</a></li>
          <li className="p__opensans"><a href="#">Contact Us</a></li>
          <li className="p__opensans"><a href="#">Blog</a></li>
          <li className="p__opensans"><a href="#">Landing</a></li>
         </ul>
       <div className="app__navbar-login">
        <a href="#" className="p__opensans">Login/Register</a>
        <div></div>
        <a href="/" className="p__opensans">Book Table</a>
       </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" className="Menu" fontSize={27} onClick={()=>{setToggle(true)}} /> 

      {toggle && (
         <div className="app__navbar-smallscreen_overlay flex-center slide_bottom">
         <MdOutlineRestaurantMenu fontSize={27} color="#fff" className="overlay__close" onClick={()=>{setToggle(false)}} />
         <ul className="app__navbar-smallscreen-links">
           <li className="p__opensans"><a href="#">Home</a></li>
           <li className="p__opensans"><a href="#">Page</a></li>
           <li className="p__opensans"><a href="#">Login</a></li>
           <li className="p__opensans"><a href="#">Contact Us</a></li>
           <li className="p__opensans"><a href="#">Blog</a></li>
           <li className="p__opensans"><a href="#">Landing</a></li>
          </ul>
       </div>
      )}
     
       
     
    </div>
    </nav>
  )
}

export default Navbar
