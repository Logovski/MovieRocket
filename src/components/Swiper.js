import React from "react";
import Swiper from "react-id-swiper";

// Swiper Css
import "swiper/css/swiper.css";
import "../theme/global.css";

// Components
import MovieBox from './MovieBox';

// Images
import Arrow from '../assets/arrow.svg'


const randomMoviesSwiper = () => {
  const params = {
      slidesPerView: 3.7,
      spaceBetween: 15,
  }
  return (
    <div>
      <div className="wrapper">
        <div className="box-header">
          <h4 className="color-white font14 margin15">Random Movies</h4>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <Swiper className="swiper" {...params}>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>

        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
        <div>
          <MovieBox />
        </div>
      </Swiper>
    </div>
  );
}

export default randomMoviesSwiper;
