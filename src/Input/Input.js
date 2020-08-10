import React from "react";
import "./Input.css";

const input = (props) => {
  return (
    <div className="input">
      <input
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder="ENTER NUMBER"
      />
    </div>
  );
};

export default input;
