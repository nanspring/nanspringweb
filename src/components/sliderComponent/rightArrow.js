import React from 'react';

const RightArrow = ({nextslide}) => {
  return (
    <div className="right-arrow" onClick={nextslide} >
      <i className="fa fa-arrow-right fa-2x" ></i>
    </div>
  );
}

export default RightArrow;
