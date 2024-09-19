// import React from 'react'
import image from "../../constants/image"
const SubHeading = (props) => {
  return (
    <div style={{marginBottom:"1rem"}}>
      <h3 className="p__opensans">{props.title}</h3>
      <img className="spoon__img " src={image.spoon} alt="" />
    </div>
  )
}
export default SubHeading
