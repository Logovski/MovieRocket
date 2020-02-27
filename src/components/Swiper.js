import React from "react";
import Swiper from "react-id-swiper";

// Swiper Css
import "swiper/css/swiper.css";
import "../theme/global.css";

// Components
import MovieBox from './MovieBox';

// Images
import Arrow from '../assets/arrow.svg'


const randomMoviesSwiper = (props) => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
    containerClass: "random-movies"
  };
  const movieData = props.randomMovies;
  // Swipper
  let randomMoviesSlider = null
  if (movieData) {
    randomMoviesSlider = (
      <Swiper {...params}>
        {
          movieData.map(movie => {
            let formatedTitle;
            // If movie have long title split it and add '...'
            if (movie.Title.length > 10) {
              let moviefomated = movie.Title.substring(0, 9);
              formatedTitle = moviefomated + "...";
            }else {
              formatedTitle = movie.Title;
            }
            
            return (
              <MovieBox
                movieClicked={() => props.movieClicked(movie)}
                key={movie.id}
                poster={movie.Poster}
                title={formatedTitle}
                runtime={movie.Runtime}
                rated={movie.Rated}
              ></MovieBox>
            );
          })
        }
      </Swiper>
    )
  }

  return (
    <div>
      <div className="wrapper">
        <div className="box-header">
          <h4 className="color-white font14 margin15">Random Movies</h4>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      {randomMoviesSlider}
    </div>
  );
}

export default randomMoviesSwiper;
