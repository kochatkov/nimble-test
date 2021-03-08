import { createRoutineCreator } from 'redux-saga-routines';

const createTriggerRoutine = createRoutineCreator(['TRIGGER']);

export default function triggerRoutine(prefix = '', name) {
  return createTriggerRoutine(`${prefix ? `${prefix}/` : ''}${name}`)
};
