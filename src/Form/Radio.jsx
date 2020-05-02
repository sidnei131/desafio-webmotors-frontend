import React from 'react';
import './Form.css';
import './Radio.css';

const Radio = (props) => {
  return (
    <label className={props.active === 'true' ? 'Radio active' : 'Radio'}>
      <input type='radio' {...props.attr} onChange={props.onChange} />
      {props.label}
    </label>
  );
};

export default Radio;