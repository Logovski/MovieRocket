import React from 'react';
import '../theme/global.css';


const header = props => (
  <div className="header bg-darker">
    <div className="wrapper">
      <h3 className="font22">{props.title}</h3>
    </div>
  </div>
);
export default header