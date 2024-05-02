import { Component, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

// Context
import { ThemeContext } from './contexts/theme-context';

// Constants
import { DART_THEME, LIGHT_THEME } from '@constants/common';
import { routes } from '@constants/routes';

// Component
import { Button, Header } from '@components';

// Containers
import { NotFound } from '@containers';
// Style
import '@/App.css';

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(
    isBrowserDefaultDark() ? DART_THEME : LIGHT_THEME
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouterProvider
        router={routes}
        fallbackElement={
          <>
            <div className='sdad'>dsad</div>
          </>
        }
      />
    </ThemeContext.Provider>
  );
}

export default App;
