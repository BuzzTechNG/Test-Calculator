import React from "react";
import "./Calculationsign.css";

const calculationSign = (props) => {
  return (
    <div className="calculateSign" onClick={props.calculate}>
      {props.label}
    </div>
  );
};

export default calculationSign;
