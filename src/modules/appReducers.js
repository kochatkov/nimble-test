import { handleActions } from 'redux-actions';
import * as actions from './appActions';
import { combineReducers } from "redux";

const timerItemsStateInit = [];

const timerItems = handleActions({
    [actions.addTimer.SUCCESS](state, { payload }) {

      return [...state, payload];
    },
  [actions.removeTimer.SUCCESS](state, { payload }) {
    return payload;
  },
    [actions.clearAll.TRIGGER](state) {
      return timerItemsStateInit
    }
  },
  timerItemsStateInit
);

export const homePageReducer = combineReducers({
  timerItems
});
