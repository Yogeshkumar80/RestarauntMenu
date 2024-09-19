import SubHeading from "../../components/SubHeading/SubHeading";
import "./Laurels.css";
import {images, data } from "../../constants";

const Award = ({award:{imgUrl, title, subtitle}} ) => {
  return(
    <div className="app__laurels_awards-cards">
    <img src={imgUrl} alt="Awards" />
    <div className="app__laurels_awards-cards_content">
      <p className="p__cormorant" style={{color:"var(--color-golden)"}}>{title}</p>
      <p className="p__cormorant" style={{color:"var(--color-white)"}}>{subtitle}</p>
    </div>
  </div>
  )
};

const Laurels = () => {
  
  return(
  <div className="app__wrapper section__padding app__bg" id="award">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1> 
      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <Award award={award}  key={index} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="Laurels" />
    </div>
  </div>
  )
};

export default Laurels;
