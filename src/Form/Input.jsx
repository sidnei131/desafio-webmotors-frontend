import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div className='InputGroup'>
      <input type='text' className={props.hasValue ? 'hasValue' : ''} {...props.attr} onChange={props.onChange} />
      <label className='Input'>
        {props.label}
      </label>
    </div>
  );
};

export default Input;