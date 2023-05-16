import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { RouterProvider } from 'react-router';
import { ContextProvider } from './components/contexts/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
<RouterProvider router={router}/>
</ContextProvider> 
  </React.StrictMode>
);
reportWebVitals();
