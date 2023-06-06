import React, {useState} from "react";
import catalog from "../../assets/img/catalog/catalog.png";

import Header from "../../layouts/Header/Header";
import ProductSlider from "./ProductSlider/ProductSlider";
import ProductDesc from "./ProductDesc/ProductDesc";
import MoreProducts from "./MoreProducts/MoreProducts";

import "./productPage.scss";
import {ProductT} from "../../@types";

const products: ProductT[] = [
  {
    img: catalog,
    title: 'Statuario Extra',
    type: 'Мрамор'
  },
  {
    img: catalog,
    title: 'Statuario Extra',
    type: 'Мрамор'
  },
  {
    img: catalog,
    title: 'Statuario Extra',
    type: 'Мрамор'
  },
  {
    img: catalog,
    title: 'Statuario Extra',
    type: 'Мрамор'
  },
  {
    img: catalog,
    title: 'Statuario Extra',
    type: 'Мрамор'
  },
];

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-page">
      <Header />
      <div className="container">
        <div className="product-inner">
          <h1 className="title">Diano Reale</h1>
          <p className="subtitle">Мрамор</p>
          <div className="product-content">
            <ProductSlider />
            <div className="product-info">
              <div className="article">
                <p>Артикул: 34141</p>
                <p>В наличии 15 шт</p>
              </div>
              <div className="price">
                <h1 className="title">1920 ₽/ м2</h1>
                <p className="discount">1920 ₽/ м2</p>
              </div>
              <div className="colors">
                <p>Цвет: </p>
                <div className="color" style={{backgroundColor: "#F0E4D8"}}></div>
                <div className="color" style={{backgroundColor: "#F5F5F5"}}></div>
                <div className="color" style={{backgroundColor: "#DAA676"}}></div>
              </div>
              <div className="buy">
                <div className="increment">
                  <button onClick={() => quantity > 1 ? setQuantity(old => old - 1) : null}>-</button>
                  <p>{quantity}</p>
                  <button onClick={() => setQuantity(old => old + 1)}>+</button>
                </div>
                <button className="btn grey">Купить в один клик</button>
                <button className="btn grey-outline">Связаться с нами</button>
                <button>
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2018 12.0936V2.94386C14.2018 1.78076 13.7055 1.31552 12.4726 1.31552H11.6662C10.4333 1.31552 9.93708 1.78076 9.93708 2.94386V12.0936M3.34617 12.0936V6.82087C3.34617 5.65777 3.84242 5.19253 5.07531 5.19253H5.88173C7.11462 5.19253 7.61087 5.65777 7.61087 6.82087V12.0936M0.818359 12.1711H16.3264" stroke="#2E303D" strokeOpacity="0.49" strokeWidth="1.5508" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.06874 15.4971C8.80511 15.5901 8.37088 15.5901 8.10725 15.4971C5.85858 14.7294 0.833984 11.527 0.833984 6.0992C0.833984 3.70321 2.76473 1.76471 5.14521 1.76471C6.55644 1.76471 7.80484 2.44706 8.58799 3.50161C8.98638 2.96338 9.50528 2.52594 10.1031 2.22432C10.701 1.92271 11.3612 1.7653 12.0308 1.76471C14.4113 1.76471 16.342 3.70321 16.342 6.0992C16.342 11.527 11.3174 14.7294 9.06874 15.4971Z" stroke="#2E303D" strokeOpacity="0.49" strokeWidth="1.5508" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <ProductDesc />
            </div>
          </div>
        </div>
        <MoreProducts products={products} />
      </div>
    </div>
  );
};

export default ProductPage;