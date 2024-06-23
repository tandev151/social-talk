import React from 'react';
import { Button } from '@components';
import './_sliding-card.scss';

export const SlidingCard = () => {
  return (
    <div className='sliding-card'>
      <div className='image-container'>
        <img src='src/assets/media/images/shoes.png' alt='' />
      </div>
      <div className='body'>
        <div className='title'>NIKE AIR MAX</div>

        <div className='quote'>Men's Shoes</div>
        <div className='sub-title'>PRODUCT DETAIL</div>
        <div className='quote'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </div>
        <div className='sub-title'>SIZE</div>
        <div className='sizes'>
          {[38, 39, 39, 40, 41, 42, 43].map((item) => (
            <div className='size-item'>{item}</div>
          ))}
        </div>

        <div className='footer'>
          <div className='summary'></div>
          {/* <Button label='Buy' onClick={() => {}}></Button> */}
        </div>
      </div>
    </div>
  );
};
