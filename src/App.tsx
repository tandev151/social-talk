import '@/App.css';
import { Button } from '@components';

function App() {
  return (
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
    </div>
  );
}

export default App;
