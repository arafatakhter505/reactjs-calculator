import React from "react";

const Button = ({ text, handleButton }) => {
  return <button onClick={() => handleButton(text)}>{text}</button>;
};

export default Button;
