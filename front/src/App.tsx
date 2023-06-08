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
import ProductPage from "./pages/ProductPage/ProductPage";
import ServicesPage from "./layouts/ServicesPage/ServicesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Contacts />} path='/contacts' />
        <Route element={<Services />} path='/services' />
        <Route element={<ServicesPage />} path='/services/:id' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<Reviews />} path='/reviews' />
        <Route element={<Catalog />} path='/catalog' />
        <Route element={<ProductPage />} path='/product/:id' />
      </Routes>
      <Footer />
    </>
  )
}

export default App;