import React from "react";
import "../../theme/global.css";

const Input = props => (
  <div className="wrapper">
    <input placeholder="Enter Title" onChange={props.inputChanged} />
  </div>
);

export default Input;
