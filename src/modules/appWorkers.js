import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { addTimer, removeTimer } from "./appActions";
import { appSelectors } from "./appSelectors";

function* addTimerWatcher({ payload }) {
  try {
    yield put(addTimer.request());

    yield put(addTimer.success(payload))
  } catch(error) {
    console.log(error)
  }
}

function* removeTimerWatcher({ payload }) {
  try {
    yield put(removeTimer.request());

    const timerItems = yield select(appSelectors.getTimerItems);

    const updatedTimers = timerItems.filter(item => item.id !== payload)

    yield put(removeTimer.success(updatedTimers));
  } catch (error) {
    console.log(error)
  }
}

export function* appWatcher() {
  yield all([
    takeLatest(addTimer.TRIGGER, addTimerWatcher),
    takeLatest(removeTimer.TRIGGER, removeTimerWatcher),
  ])
}
