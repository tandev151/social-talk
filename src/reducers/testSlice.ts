import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { TEST_REDUX } from '@constants/actionType';

const TEST = 'test';
export interface TestState {
  number: number;
}

const initialState = {
  number: 1
} satisfies TestState as TestState;

const testSlice = createSlice({
  name: TEST,
  initialState: initialState,
  reducers: (create) => {
    return {
      testF: create.reducer<number>((state, action) => {
        console.log({ action });
        state.number = action.payload;
      })
    };
  }
});

export const { testF } = testSlice.actions;

export default testSlice.reducer;
