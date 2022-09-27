import { createBrowserRouter } from 'react-router-dom';

import MainScreen from '../screens/MainScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
  },
]);

export default router;
