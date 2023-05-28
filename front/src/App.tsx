import React from 'react';

import Main from "./pages/Main/Main";

import './App.scss';
import Footer from "./layouts/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Services />} path='/services' />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
