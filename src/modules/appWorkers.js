import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { addTimer } from "./appActions";

function* addTimerWatcher() {

}

export function* appWatcher() {
  yield all([
    takeLatest(addTimer.TRIGGER, addTimerWatcher)
  ])
}