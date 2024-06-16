import React from 'react';
import { Button } from '@components';

export const SlidingCard = () => {
  return (
    <div className='sliding-card'>
      <div className='image-container'></div>
      <div className='body'>
        <div className='title'>NIKE AIR MAX</div>

        <div className='category'>Men's Shoes</div>
        <div className='sub-title'>PRODUCT DETAIL</div>
        <div className='quote'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className='sub-title'>SIZE</div>
        <div className='sizes'></div>

        <div className='footer'>
          <div className='sumary'></div>
          <Button label='Buy' onClick={() => {}}></Button>
        </div>
      </div>
    </div>
  );
};
