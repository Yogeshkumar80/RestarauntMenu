// import React from 'react'
import "./MenuItem.css"

const MenuItem = (props) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-name">
          <p className="p__cormorant" style={{color:"#DCCA87"}}>{props.title}</p>
        </div>
        <div className="app__menuItem-dash" />
        <div className="app__menuItem-prices">
           <p className="p__cormorant">{props.price}</p>
        </div>
      </div>
      <div className="app__menu-sub">
        <p className="p__opensans" style={{color:"#AAA"}}>{props.tag}</p>
      </div>
      
    </div>
  )
}

export default MenuItem