import React from 'react'
import "./Gallery.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import image from "../../constants/image";
import {
  BsInstagram,
  BsArrowRightShort,
  BsArrowLeftShort,
} from "react-icons/bs";

const imageGallery = [
  image.gallery01,
  image.gallery02,
  image.gallery03,
  image.gallery04,
];
const Gallery = () => {
  const scrollRef= React.useRef(null)

  const Scrol= (direction)=>{
    const {current} = scrollRef;
    if(direction=== "left"){
      current.scrollLeft -=300;
    }
    else{
      current.scrollLeft +=300;
    }
  }
  return (
    <div className="flex__center app__gallery ">
      <div className="app__gallery-content">
        <SubHeading title="instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "var(--color-grey)", margin: "1rem 0" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam
          vel saepe non? Doloribus omnis
        </p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery_image">
        <div className="app__gallery_image_container" ref={scrollRef}>
          {imageGallery.map((image, index) => (
            <div className="app__gallery_image_card flex__center" key={index}>
              <img src={image} alt="Images"/>
              <BsInstagram className="gallery_image-icon"/>
            </div>
          ))}
        </div>
        <div className="app__gallery-image-arrow">
          <BsArrowLeftShort className="gallery__arrow" onClick={()=>(Scrol("left"))}/>
          <BsArrowRightShort className="gallery__arrow" onClick={()=>(Scrol("right"))}/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
