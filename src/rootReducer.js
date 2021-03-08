import { combineReducers } from "redux";
import { homePageReducer } from './modules/appReducers';

const appReducer = combineReducers({
  homePage: homePageReducer
});

const rootReducer = (state, actions) => {
  return appReducer(state, actions);
}

export default rootReducer;
