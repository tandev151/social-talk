import { useState } from 'react';

// Context
import { ThemeContext } from './contexts/theme-context';

// Constants
import { DART_THEME, LIGHT_THEME } from '@constants/common';
// Component
import { Button } from '@components';

// Style
import '@/App.css';

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(
    isBrowserDefaultDark() ? DART_THEME : LIGHT_THEME
  );
  return (
    <ThemeContext.Provider value={theme}>
      <div className={`global-container theme-${theme}`}>
        <div className='login'>
          <input type='text' className='username' />
          <input type='text' className='password' />
          <span className='error'>CapsLock is opening</span>
          <Button
            className='submit-btn none-outline-btn'
            label='Submit'
            disabled
            onClick={() => {
              console.log('Clicked ');
            }}></Button>

          <Button
            className='submit-btn none-outline-btn'
            label={theme}
            onClick={() => {
              setTheme(theme === LIGHT_THEME ? DART_THEME : LIGHT_THEME);
            }}></Button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
