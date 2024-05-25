import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       thunk: {
  //         extraArgument: {}
  //       }
  //     })
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
