// import React from 'react'
import { data,images } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu_title ">
        <SubHeading title="Menu That Fits You Platte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu_menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={index} title={wine.title} tag={wine.tags} price={wine.price}   />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu-image" />
        </div>
        <div className="app__specialMenu-menu_cocktail flex__center">
          <p className="app__specialMenu-menu_heading">Cocktail</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktails, index) => (
               <MenuItem key={index} title={cocktails.title } tag={cocktails.tags} price={cocktails.price}   />
            ))}
          </div>
        </div>
        

      </div>
      {/* <button className="custom__button">
        View More
      </button> */}
    </div>
  );
};

export default SpecialMenu;
