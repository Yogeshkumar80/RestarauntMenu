// import React from 'react'
import "./Newsletter.css"
import SubHeading from "../SubHeading/SubHeading"
const Newsletter = () => {
  return (
    <div className="app__bg  flex__center section__padding">
      <div className="newsletter_content">
      <SubHeading title={"Newsletter"}/>
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And Never miss latest Updates!</p>
     <div className="Newsletter_email_address">
     <input type="text" placeholder="Email Address" />
     <button className="custom__button">Subscribe</button>
      </div>
        
      </div>
      
    </div>
  )
}

export default Newsletter;
