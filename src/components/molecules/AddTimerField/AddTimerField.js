import React from 'react';
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";

export const AddTimerField = () => {
  return (
    <div className="input__wrapper">
      <Input classes="input" placeholder="Enter tracker name" />
      <Button />
    </div>
  )
};
