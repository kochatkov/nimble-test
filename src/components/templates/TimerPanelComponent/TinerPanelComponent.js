import React, { useCallback, useState } from 'react';
import { AddTimerField } from "../../molecules/AddTimerField/AddTimerField";
import { TimersListComponent } from "../../atoms/TimersListComponent/TimersListComponent";
import { useDispatch, useSelector } from "react-redux";
import { appSelectors } from "../../../modules/appSelectors";
import {addTimer, removeTimer} from "../../../modules/appActions";

export const TimerPanelComponent = () => {
  const timerItems = useSelector(appSelectors.getTimerItems);
  const dispatch = useDispatch();
  const [timerName, setTimerName] = useState('');

  const handleAddTimer = useCallback((name) => {
    const newTimerItem = {
      id: Math.random(),
      timerName: name,
      timerTime: '10:11:12'
    };

    dispatch(addTimer(newTimerItem));
    setTimerName('');
  }, [dispatch]);

  const handleRemoveTimerItem = useCallback((id) => {
    dispatch(removeTimer(id))
  }, [dispatch]);

  return (
    <>
      <AddTimerField
        handleAddTimer={handleAddTimer}
        timerName={timerName}
        setTimerName={setTimerName}
      />
      <TimersListComponent
        timerItems={timerItems}
        handleRemoveTimerItem={handleRemoveTimerItem}
      />
    </>
  )
};
