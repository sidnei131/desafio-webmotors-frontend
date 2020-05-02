import React from 'react';
import './Select.css';

const Select = (props) => {
  return (
    <div className={props.last ? 'SelectGroup last' : 'SelectGroup'}>
      <select id={props.id} className={props.hasValue ? 'hasValue' : ''} {...props.attr} onChange={props.onChange}>
        <option key='-1' value='-1'></option>
        {props.options && props.options.map(i => <option key={i.ID} value={i.ID}>{i.Name}</option>)}
      </select>
      <label className='Select'>
        {props.label}
      </label>
    </div>
  );
};

export default Select;