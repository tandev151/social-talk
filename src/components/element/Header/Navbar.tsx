import Icon from '@components/common/Icon';
import React from 'react';

import { Input } from '@components';

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
          <Input placeholder='Nhap tu khoa' value='' onChange={() => {}} />

          <Icon name='search-white' className='search-btn' />
        </div>
      </div>

      <div className='nav-part'>
        <div className='nav-item'>HOME</div>
        <div className='nav-item'>ABOUT</div>
        <div className='nav-item'>PAGES</div>
        <div className='nav-item'>CONTACT</div>
        <div className='nav-item start'>GET STARTED</div>
      </div>
    </div>
  );
}
