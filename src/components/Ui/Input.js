import React from "react";
import "../../theme/global.css";

const Input = props => (
  <div className="wrapper">
    <input
      placeholder="Enter Title"
      onChange={props.inputChanged}
      value={props.inputValue}
    />
  </div>
);

export default Input;
