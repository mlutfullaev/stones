import React from 'react';

import Header from "../../layouts/Header/Header";
import ProductSlider from "./ProductSlider/ProductSlider";

import './productPage.scss'

const ProductPage = () => {
  return (
    <div className='product-page'>
      <Header />
      <div className="container">
        <div className="product-inner">
          <h1 className="title">Diano Reale</h1>
          <p className="subtitle">Мрамор</p>
          <div className="product-content">
            <ProductSlider />
            <div className="product-info">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;