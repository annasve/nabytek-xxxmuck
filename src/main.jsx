import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { HomePage } from './components/HomePage/HomePage.jsx';
import { ProductPage } from './components/ProductPage/ProductPage.jsx';

//---router config
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [{ path: '/product', element: <ProductPage /> }],
  },
]);

//---render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
