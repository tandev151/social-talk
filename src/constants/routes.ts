import { HomePage, LoginPage, NotFound } from '@containers/index';

import { createBrowserRouter } from 'react-router-dom';

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/login',
    Component: LoginPage
  },
  {
    path: '*',
    Component: NotFound
  }
]);
