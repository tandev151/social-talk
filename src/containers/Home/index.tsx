import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Store
import { RootState } from '@store';

// Slices
import { testF } from '@reducers/testSlice';

// Components
import { Button, Header } from '@components';

// Utils
import { getTheme } from '@utils/common';

// Themes
import { ThemeContext } from '@contexts/theme-context';

function HomePage() {
  // Selector
  const number = useSelector((state: RootState) => state.test);

  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`page-container theme-${theme}`}>
      <Header />
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
