import { createBrowserRouter } from 'react-router-dom';

import MainScreen from '../screens/MainScreen';
import UserScreen from '../screens/UserScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
  },
  {
    path: '/user',
    element: <UserScreen />,
  },
]);

export default router;
