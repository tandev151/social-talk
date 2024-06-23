import Icon from '@components/common/Icon';
import React from 'react';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-part'>
        <img
          src='src/assets/media/images/pod-talk-logo.png'
          alt=''
          className='logo'
        />
        <div className='search'>
          <input className='search-input' />
          <span className='search-btn'>
            <Icon name='search-white' />
          </span>
        </div>
      </div>
    </div>
  );
}
