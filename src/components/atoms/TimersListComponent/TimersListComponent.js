import React, { useState } from 'react';

import { ReactComponent as PlayButtonSvg} from "../../../assets/play-btn.svg";
import { ReactComponent as PauseButtonSvg} from "../../../assets/pause-btn.svg";
import { ReactComponent as RemoveSvg } from '../../../assets/remove.svg';;

export const TimersListComponent = ({ timerItems, handleRemoveTimerItem }) => {
  const [isTimerRun, setIsTimeRun] = useState(false);


  return (
    <div className="timers-list">
      {timerItems.map((item, index) => (
        <div key={index} className="timers-list__item" style={{
          backgroundColor: isTimerRun ? "lightblue" : "transparent"
        }}>
          <p className="timers-list__text">{item.timerName}</p>
          <p className="timers-list__text">{item.timerTime}</p>
          <div className="timers-list__buttons">
            <div className="timers-list__btn-wrapper">
              {isTimerRun ? <PauseButtonSvg/> : <PlayButtonSvg/>}
            </div>
            <div className="timers-list__btn-wrapper" onClick={() => handleRemoveTimerItem(item.id)}>
              <RemoveSvg/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};
