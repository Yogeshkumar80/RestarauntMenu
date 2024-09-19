import image from "../../constants/image";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className=" app__bg flex__center app__aboutus section__padding" id="About">
      <div className="app__aboutus-overlay flex__center">
        <img src={image.G} alt="G image" />
      </div>
      <div className="app__aboutus-content flex__center" >
        <div className="app__aboutus-content_aboutus ">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={image.spoon} alt="Spoon Image"  className="spoon__image"/>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">Know More</button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={image.knife} alt="Knife image" />
        </div>
        <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
          <img src={image.spoon} alt="Spoon Image" className="spoon__image"/>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
