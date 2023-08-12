import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate} from 'react-router-dom';

import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/*' element={<Navigate to='/' />} />
      <Route element={<App />} path='/' />
      
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
