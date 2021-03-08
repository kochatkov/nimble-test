import { all, fork } from 'redux-saga/effects';
import { appWatcher } from "./modules/appWorkers";

export default function* rootSaga() {
  yield all([
    fork(appWatcher)
  ])
}