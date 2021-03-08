import React from 'react';

import { ReactComponent as PlayBtn } from "../../../assets/play.svg";

export const Button = () => {
  return (
    <>
      <button className="button-add">
        <PlayBtn />
      </button>
    </>
  )
};