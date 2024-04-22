import { useState } from 'react';

import '@assets/style/index.scss';

function App() {
  return (
    <div className='login'>
      <input type='text' className='username' />
      <input type='text' className='password' />
      <span className='error'>CapsLock is opening</span>
    </div>
  );
}

export default App;
