import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home/home-page.component';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <HomePage/> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
