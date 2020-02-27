import React from "react";
import CategorySwiper from "react-id-swiper";

import "swiper/css/swiper.css";
import '../theme/global.css';

import CategoryBox from './Ui/CategoryBox';

// Import Category Icons
import Comedy from "../assets/category/comedy.svg";
import Action from '../assets/category/action.svg';
import Adventure from "../assets/category/adventure.svg";
import Science from "../assets/category/science.svg";
import Horror from "../assets/category/horror.svg";
import Drama from "../assets/category/drama.svg";
import Family from "../assets/category/family.svg";
import SciFi from "../assets/category/sciFi.svg";
import Romance from "../assets/category/romance.svg";
import Biography from "../assets/category/biography.svg";
import Thriller from "../assets/category/crime.svg";
import Crime from "../assets/category/thriller.svg";
import Fantasy from "../assets/category/fantasy.svg";
import Mystery from "../assets/category/mystery.svg";
import Sport from "../assets/category/sport.svg";
import History from "../assets/category/history.svg";
import War from "../assets/category/war.svg";
import Animated from "../assets/category/animated.svg";
import Music from "../assets/category/music.svg";


const swiperCategory = props => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
  };

  return (
    <div>
      <div className="wrapper">
        <CategorySwiper {...params}>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Comedy')} icon={Comedy} category="Comedy"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Action')} icon={Action} category="Action"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Adventure')} icon={Adventure} category="Adventure"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Horror')} icon={Horror} category="Horror"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Drama')} icon={Drama} category="Drama"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Family')} icon={Family} category="Family"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Sci-Fi')} icon={SciFi} category="Sci-Fi"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Romance')} icon={Romance} category="Romance"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Biography')} icon={Biography} category="Biography"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Thriller')} icon={Thriller} category="Thriller"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Crime')} icon={Crime} category="Crime"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Fantasy')} icon={Fantasy} category="Fantasy"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Mystery')} icon={Mystery} category="Mystery"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Sport')} icon={Sport} category="Sport"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('History')} icon={History} category="History"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('War')} icon={War} category="War"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Animation')} icon={Animated} category="Animation"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Music')} icon={Music} category="Music"></CategoryBox>
          <CategoryBox categoryBoxClicked={() => props.categoryBoxClicked('Science')} icon={Science} category="Science"></CategoryBox>
        </CategorySwiper>
      </div>
    </div>
  );
};
export default swiperCategory;




