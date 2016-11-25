import { combineReducers } from 'redux';
import counter from './counter-reducer';
import curse from './curse-reducer';
export const rootReducer = combineReducers({
  counter,
  curse
});
