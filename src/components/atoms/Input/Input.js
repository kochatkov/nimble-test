import React from 'react';

export const Input = ({ placeholder, classes, changeHandler, value }) => {
  return (
    <input
      type="text"
      className={classes}
      placeholder={placeholder}
      onChange={changeHandler}
      value={value}
    />
  )
};
