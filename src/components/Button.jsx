import React from "react";
import "./Button.css";

const Button = ({ name }) => {
  return (
    <button className="button">
      {/* Luz fija dentro del botón */}
      <span className="light-fixed"></span>

      {/* Luz parpadeante dentro del botón */}
      <span className="light-pulse"></span>

      {/* Texto del botón */}
      <span className="button-text">{name}</span>
    </button>
  );
};

export default Button;
