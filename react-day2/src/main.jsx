import { StrictMode } from 'react'
//import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import './index.css'
import Clock from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock locale="bn-BD">test</Clock>
  </StrictMode>,
)

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Clock from './App.jsx'; // App.jsx তে তোমার Clock class আছে

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);
