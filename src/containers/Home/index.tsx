import { useDispatch, useSelector } from 'react-redux';
import { testF } from '@reducers/testSlice';
import { Button } from '@components';
import { RootState } from '@store';
import { Dropdown as Drrropdown } from '@components/common/Dropdown/Dropdown';

function HomePage() {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.test);

  return (
    <div>
      <Drrropdown label='Danh sách test' onToggle={() => {}} />
      <Button
        label='Click'
        onClick={() => {
          console.log({ number });
          dispatch(testF(number?.number + 2));
        }}></Button>
    </div>
  );
}

export default HomePage;
