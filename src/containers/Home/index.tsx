import { useDispatch, useSelector } from 'react-redux';
import { testF } from '@reducers/testSlice';
import { Button } from '@components';
import { RootState } from '@store';

function HomePage() {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.test);

  return (
    <div>
      <Button
        label='click'
        onClick={() => {
          console.log({ number });
          dispatch(testF(number?.number + 2));
        }}></Button>
    </div>
  );
}

export default HomePage;
