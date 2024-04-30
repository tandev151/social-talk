import { useState } from 'react';

// Context
import { ThemeContext } from './contexts/theme-context';

// Constants
import { DART_THEME, LIGHT_THEME } from '@constants/common';
// Component
import { Button, Header } from '@components';

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
      <div className={`global-container theme-${theme}`}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
