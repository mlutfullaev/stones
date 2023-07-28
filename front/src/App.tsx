import React from 'react';
import Main from "./pages/Main/Main";
import './App.scss';
import Footer from "./layouts/Footer/Footer";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
import Reviews from "./pages/Reviews/Reviews";
import Catalog from "./pages/Catalog/Catalog";
import ProductPage from "./pages/ProductPage/ProductPage";
import ServicesPage from "./layouts/ServicesPage/ServicesPage";
import About from './pages/About/About';
import Partners from './components/Partners/Partners';
import OurWorks from './components/OurWorksImages/OurWorksImage';
import WhatsApp from './assets/img/WhatsApp.webp'

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
        <Route element={<About />} path='/about' />
        <Route element={<ProductPage />} path='/product/:id' />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Partners/>
      <OurWorks/>
      <Link to='https://wa.me/79213627629' target='blank'>
        <div className='whatsappbutton'>
          <img src={WhatsApp} alt="" />
        </div>
      </Link>
      <Footer />
    </>
  )
}

export default App;