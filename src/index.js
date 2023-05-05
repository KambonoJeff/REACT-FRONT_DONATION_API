import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { RouterProvider } from 'react-router';
import { ContextProvider } from './components/contexts/ContextProvider';
import Dashboard from './views/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Dashboard/>
  </React.StrictMode>
);
reportWebVitals();
{/* <ContextProvider>
<RouterProvider router={router}/>
</ContextProvider> */}