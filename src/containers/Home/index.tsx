import { useDispatch, useSelector } from 'react-redux';
import { testF } from '@reducers/testSlice';
import { SlidingCard } from '@components';
import { RootState } from '@store';

function HomePage() {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.test);

  return (
    <div>
      <div className='test'>Test</div>
      <SlidingCard />
      <SlidingCard />
      <SlidingCard />
      <SlidingCard />
    </div>
  );
}

export default HomePage;
