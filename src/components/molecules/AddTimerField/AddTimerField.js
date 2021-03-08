import React, {useCallback, useState} from 'react';
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";

export const AddTimerField = ({ handleAddTimer, setTimerName, timerName }) => {

  const changeHandler = useCallback((event) => {
    setTimerName(event.target.value);
  }, [timerName])

  return (
    <div className="input__wrapper">
      <Input
        classes="input"
        placeholder="Enter tracker name"
        changeHandler={changeHandler}
        value={timerName}
      />
      <Button onClick={() => handleAddTimer(timerName)}/>
    </div>
  )
};
