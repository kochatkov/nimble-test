import createRequestRoutine from './reduxUtils/createRequestRoutine';
import createTriggerRoutine from './reduxUtils/createTriggerRoutine';

const prefix = 'appPage';
const createRequestBound = createRequestRoutine.bind(null, prefix);
const createTriggerBound = createTriggerRoutine.bind(null, prefix);

export const clearAll = createTriggerBound('CLEAR_ALL');
export const addTimer = createRequestBound('ADD_TIMER_TO_LIST');
