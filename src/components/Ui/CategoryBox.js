import React from "react";
import "../../theme/global.css";


const categoryBox = props => (
  <div onClick={props.categoryBoxClicked} className="swiper-slide">
    <div className="category-box flex-center bg-dark">
      <img src={props.icon} alt="category" />
    </div>
    <p className="font11 color-white text-center">{props.category}</p>
  </div>
);

export default categoryBox;
