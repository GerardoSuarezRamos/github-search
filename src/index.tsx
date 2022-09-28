import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import { Provider } from 'jotai';

import reportWebVitals from './reportWebVitals';
import router from './router/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider>
    <RouterProvider router={router} />
    <Toaster position="bottom-right" />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
