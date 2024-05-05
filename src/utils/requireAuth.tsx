import React from 'react';

export function requireAuth(Component: any) {
  return (
    <div className='require-container'>
      <div className='test'>Hello</div>
      <Component />
    </div>
  );
}
