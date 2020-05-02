import React from 'react';

const Loader = (props) => {
  return (
    <div className={`loader loader--${props.show}`}>
      <div className='loader__spin'></div>
    </div>
  );
};

export default Loader;