import '@/App.css';
import { Button } from '@components';

function App() {
  return (
    <div className='login'>
      <input type='text' className='username' />
      <input type='text' className='password' />
      <span className='error'>CapsLock is opening</span>
      <Button />
    </div>
  );
}

export default App;
