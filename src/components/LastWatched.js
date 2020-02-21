import React from 'react';

import '../theme/global.css';

import MovieBoxWide from '../components/MovieBoxWide';

const lastWatched = () => (
  <div>
    <div className="wrapper">
      <div className="box-header">
        <h4 className="color-white font14 margin15">Last Watched</h4>
      </div>
      <MovieBoxWide />
    </div>
  </div>
);


export default lastWatched;