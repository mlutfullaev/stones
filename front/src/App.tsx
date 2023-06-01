import React from 'react';

import Main from "./pages/Main/Main";

import './App.scss';
import Footer from "./layouts/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import Reviews from "./pages/Reviews/Reviews";
import Catalog from "./pages/Catalog/Catalog";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Contacts />} path='/contacts' />
        <Route element={<Services />} path='/services' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<Reviews />} path='/reviews' />
        <Route element={<Catalog />} path='/catalog' />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
