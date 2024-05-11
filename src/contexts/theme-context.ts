import { createContext } from 'react';

// Constants
import { LIGHT_THEME } from '@constants/common';

export const ThemeContext = createContext({
  theme: LIGHT_THEME,
  setTheme: (theme: string) => {
    console.log({ theme });
  }
});
