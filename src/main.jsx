import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import myRouter from './Route/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myRouter} />
    </AuthProvider>
  </React.StrictMode>
);
