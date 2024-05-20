import { TEST_REDUX } from '@constants/actionType';

const initialState = {
  test: 1
};

export const testReducer = (state: unknown = initialState, action: unknown) => {
  switch (action) {
    case TEST_REDUX:
      return state;

    default:
      return state;
  }
};
