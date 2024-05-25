import { TEST_REDUX } from '@constants/actionType';

export const testRedux = () => {
  console.log({
    type: TEST_REDUX,
    payload: { change: 2 }
  });
  return {
    type: TEST_REDUX,
    payload: { change: 2 }
  };
};
