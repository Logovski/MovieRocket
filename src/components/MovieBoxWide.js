import React from 'react';

import '../theme/global.css';

import Star from '../assets/star.svg'

const movieBoxWide = props => (
  <div className="movie-box-wide bg-dark" onClick={props.modalIsClicked}>
    <div className="movie-wide-poster flex-center">
      <img src={props.poster} alt="Poster" className="shadow" />
    </div>
    <div className="movie-wide-info">
      <p className="margin10 color-white">{props.title}</p>
      <div className="movie-wide-rating">
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <img src={Star} alt="Star" />
        <p className="font14 color-yellow">
          {props.firstRating}.
          <span className="font11">{props.lastRating}</span>
        </p>
      </div>
      <p className="font11 color-grey">{props.genre}</p>
      <p className="font11 color-grey">Realised: {props.year}</p>
    </div>
  </div>
);

export default movieBoxWide;