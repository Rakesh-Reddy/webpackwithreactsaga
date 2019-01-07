import { combineReducers } from 'redux';
import Reducer from './app/containers/Task/Reducer';

const rootReducer = combineReducers({
  list: Reducer
});

export default rootReducer;