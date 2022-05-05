import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FormCheckIn from './FormCheckIn';
import FormBoarding from './FormBoarding';
import FormBreak from './FormBreak';
import GlobalStyle from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
  <BrowserRouter>
   <Routes>
   <GlobalStyle />
     <Route path="/" components={<App />}>
     <Route path="/formCheckIn" components={<FormCheckIn />} />
     <Route path="/formBoarding" components={<FormBoarding />} />
     <Route path="/formBreak" components={<FormBreak />} />
     </Route>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

