import React from 'react';
import '../theme/global.css';

import Close from '../assets/close.svg';

const header = props => (
  <div className="header bg-darker">
    <div className="wrapper header-wrapper">
      <h3 className="font22">{props.title}</h3>
      {props.close ? <img src={Close} alt="Close" onClick={props.closeIsClicked}/> : null}
    </div>
  </div>
);
export default header