import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import '/src/assets/css/bootstrap.min.css';
import '/src/assets/scss/paper-kit.scss';
//components
import LandingPage from '@views/LandingPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
);
