import React, { useContext } from 'react';

import { Button } from '@components';
import { ThemeContext } from '@contexts/theme-context';

// Constants
import { LIGHT_THEME, DART_THEME } from '@constants/common';

interface Props {}

export const Header: React.FC<Props> = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log({ theme });
  return (
    <div className='page-header'>
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
