import React from 'react';

import '../theme/global.css';

import MovieBoxWide from '../components/MovieBoxWide';

const lastWatched = props => (
  <div>
    <div className="wrapper">
      <div className="box-header">
        <h4 className="color-white font14 margin15">Last Watched</h4>
      </div>
      <MovieBoxWide
        title={props.lastMovie.Title}
        poster={props.lastMovie.Poster}
        firstRating={props.lastMovie.Rated[0]}
        lastRating={props.lastMovie.Rated[2]}
        genre={props.lastMovie.Genre.join(" | ")}
        year={props.lastMovie.Year}
      />
    </div>
  </div>
);


export default lastWatched;