import React from 'react';

import '../theme/global.css';

import Star from '../assets/star.svg'



const movieBox = props => (
  <div className="swiper-slide">
    <div className="poster">
      <img src={props.poster} alt="Poster" className="shadow"/>
    </div>
    <div className="info">
      <p className="font13 color-white">{props.title}</p>
      <div className="other-info">
        <p className="font11 color-grey">{props.runtime}</p>
        <div className="rating">
          <img src={Star} alt="Star" />
          <p className="color-yellow font11">{props.rated}</p>
        </div>
      </div>
    </div>
  </div>
);

export default movieBox;