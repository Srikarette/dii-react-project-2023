import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import reportWebVitals from './reportWebVitals';


import selfUser from './selfUserPage';
import Navbar from './pages/Navbar';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className='mainDisplay'>
      <Navbar />
      <selfUser />
    </div>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();