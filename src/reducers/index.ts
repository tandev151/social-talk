import { combineReducers } from '@reduxjs/toolkit';

//
import testReducer from './testSlice';

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
