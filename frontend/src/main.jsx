import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your App with RouterProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Do not wrap in BrowserRouter */}
  </React.StrictMode>
);
