import React from 'react';
import './Button.css';

const Button = (props) => {
  return <button className="Button" {...props.attr} onClick={props.onClick}>{props.label}</button>
};

export default Button;