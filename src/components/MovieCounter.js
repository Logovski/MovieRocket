import React from 'react';

import '../theme/global.css';

const movieCounter = props => (
  <div className="wrapper">
    <div className="counterBox bg-dark flex-center round-corners">
      <p className="color-yellow weight500">{props.moviesNumber}</p>
      <p className="color-white font13">Movies in Library</p>
    </div>
  </div>
);

export default movieCounter;