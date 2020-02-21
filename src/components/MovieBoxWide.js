import React from 'react';

import '../theme/global.css';

import Star from '../assets/star.svg'
import Joker from '../assets/joker.png'

const movieBoxWide = () => (
  <div className="movie-box-wide bg-dark">
    <div className="movie-wide-poster flex-center">
      <img src={Joker} alt="Poster" className="shadow" />
    </div>
    <div className="movie-wide-info">
      <p className="margin10 color-white">The Joker</p>
      <div className="movie-wide-rating">
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <p className="font14 color-yellow">
          7.<span className="font11">3</span>
        </p>
      </div>
      <p className="font11 color-grey">Science | Action | Horror</p>
      <p className="font11 color-grey">Realised: 2018</p>
    </div>
  </div>
);

export default movieBoxWide;