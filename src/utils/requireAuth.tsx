import React from 'react';
import { ErrorPage } from '@containers';

export function requireAuth(Component: any) {
  if (true) {
    return <ErrorPage />;
  }

  return (
    <div className='require-container'>
      <div className='test'>Hello</div>
      <Component />
    </div>
  );
}
