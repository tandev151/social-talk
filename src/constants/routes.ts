import { createBrowserRouter } from 'react-router-dom';

// Containers
import { HomePage, LoginPage, NotFound } from '@containers';

// Utils

import { requireAuth } from '@utils/requireAuth';

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
