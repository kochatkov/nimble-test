import React from 'react';

import { ReactComponent as PlayBtn } from "../../../assets/play.svg";

export const Button = ({ onClick }) => {
  return (
      <button className="button-add" onClick={onClick}>
        <PlayBtn />
      </button>
  )
};