import React, { useContext } from 'react';

import { Button } from '@components';
import { ThemeContext } from '@contexts/theme-context';

// Constants
import { LIGHT_THEME, DART_THEME } from '@constants/common';

// Sub-components
import Navbar from './Navbar';

interface Props {}

export const Header: React.FC<Props> = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='page-header'>
      <Navbar />
      <Button
        className='submit-btn none-outline-btn'
        label={theme}
        onClick={() => {
          const isCurrentLight = theme === LIGHT_THEME;
          localStorage.setItem(
            'theme',
            isCurrentLight ? LIGHT_THEME : DART_THEME
          );
          setTheme(isCurrentLight ? DART_THEME : LIGHT_THEME);
        }}></Button>
    </div>
  );
};
