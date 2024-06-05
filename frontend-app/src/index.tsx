import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NewFornecedor from './components/pages/NewFornecedor';
import EditFornecedor from './components/pages/EditFornecedor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/api/create",
    element: <NewFornecedor />
  },
  {
    path: "/api/edit/:id",
    element: <EditFornecedor />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
