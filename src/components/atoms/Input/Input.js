import React from 'react';

export const Input = ({ placeholder, classes }) => {
  return (
    <input type="text" className={classes} placeholder={placeholder} />
  )
};
