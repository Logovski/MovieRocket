import React from "react";
import CategorySwiper from "react-id-swiper";

import "swiper/css/swiper.css";
import '../theme/global.css';

import CategoryBox from './Ui/CategoryBox';


// Import Category Icons
import Action from '../assets/category/action.svg';
import Adventure from "../assets/category/adventure.svg";
import Science from "../assets/category/science.svg";
import Horror from "../assets/category/horror.svg";



const swiperCategory = props => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
  };

  return (
    <div>
      <div className="wrapper">
        <CategorySwiper {...params}>
          <CategoryBox icon={Action} category="Action"></CategoryBox>
          <CategoryBox icon={Adventure} category="Adventure"></CategoryBox>
          <CategoryBox icon={Science} category="Science"></CategoryBox>
          <CategoryBox icon={Horror} category="Horror"></CategoryBox>
          <CategoryBox icon={Action} category="Drama"></CategoryBox>
          <CategoryBox icon={Action} category="Thriller"></CategoryBox>
          <CategoryBox icon={Action} category="Romance"></CategoryBox>
          <CategoryBox icon={Action} category="Biography"></CategoryBox>
          <CategoryBox icon={Action} category="SciFi"></CategoryBox>
        </CategorySwiper>
      </div>
    </div>
  );
};
export default swiperCategory;




