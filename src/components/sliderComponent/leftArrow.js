import React from 'react';

const LeftArrow = ({prevslide}) => {
  return (
    <div className="left-arrow" onClick={prevslide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;
