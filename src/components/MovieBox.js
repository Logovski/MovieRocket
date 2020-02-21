import React from 'react';

import '../theme/global.css';

import Star from '../assets/star.svg'
import Joker from '../assets/joker.png'



const movieBox = () => (
  <div className="movie-box">
    <div className="poster flex-center responsive-img">
      <img src={Joker} alt="Poster" />
    </div>
    <p className="font11 color-white">The Joker</p>
    <div className="movie-info">
      <p className="font10 color-grey">2:12min</p>
      <img src={Star} alt="Star" />
      <p className="font10 color-grey ">7.5</p>
    </div>
  </div>
);

export default movieBox;