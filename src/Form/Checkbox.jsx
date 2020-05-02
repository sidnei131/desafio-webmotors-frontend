import React from 'react';
import './Form.css';
import './Checkbox.css';

const Checkbox = (props) => {
  return (
    <label className="Checkbox">
        <input type="checkbox" {...props.attr} />
        {props.label}
      </label>
  );
};

export default Checkbox;