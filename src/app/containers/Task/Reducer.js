import * as actionTypes from './constant';

const initialState = { data: [], loader: false };
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return { data: action.response, loader: false };
    case actionTypes.DATA_EMPTY:
      return { data: [], loader: false };
    case actionTypes.LOAD_DATA:
      return { data: [], loader: true };
    default:
      return state;
  }
}
export default Reducer; 