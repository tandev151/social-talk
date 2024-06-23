import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

// Context
import { ThemeContext } from './contexts/theme-context';

// Constants
import { DART_THEME, LIGHT_THEME } from '@constants/common';
import { routes } from '@constants/routes';

// Style
import '@/App.css';

// Fonts
// import './fonts/RubikTest.ttf';
// import '@fontsource/rubik';

function App() {
  const env = import.meta.env;
  console.log({ env });
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(
    isBrowserDefaultDark() ? DART_THEME : LIGHT_THEME
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider router={routes} />
    </ThemeContext.Provider>
  );
}

export default App;
