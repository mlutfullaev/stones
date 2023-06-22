import React, {useEffect, useState} from "react";
import catalog from "../../assets/img/catalog/catalog.png";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ProductT} from "../../@types";

import Header from "../../layouts/Header/Header";
import ProductSlider from "./ProductSlider/ProductSlider";
import MoreProducts from "./MoreProducts/MoreProducts";

import "./productPage.scss";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import {HOST_URL} from "../../assets/consts";

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
  const {id} = useParams();
  const [stone, setStone] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}stones/${id}`)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setStone(res.data);
        console.log(res.data)
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, [id]);

  return (
    <div className="product-page">
      <Header/>
      <div className="container">
        {loading && <Loading/>}
        {error && <Error/>}
        {!error && !loading ?
          stone ?
            <div className="product-inner">
              <h1 className="title">{stone.title}</h1>
              <p className="subtitle">{stone.categoryTitle}</p>
              <div className="product-content">
                <ProductSlider images={stone.uploadedFile}/>
                <div className="product-info">
                  {/*<div className="article">*/}
                  {/*  <p>Артикул: 34141</p>*/}
                  {/*  <p>В наличии 15 шт</p>*/}
                  {/*</div>*/}
                  <div className="price">
                    <h1 className="title">{stone.variants[0].pricerub} ₽/ м2</h1>
                    {/*<p className="discount">1920 ₽/ м2</p>*/}
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
                    <div className='bottom-btns'>
                      <button>
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2018 12.0936V2.94386C14.2018 1.78076 13.7055 1.31552 12.4726 1.31552H11.6662C10.4333 1.31552 9.93708 1.78076 9.93708 2.94386V12.0936M3.34617 12.0936V6.82087C3.34617 5.65777 3.84242 5.19253 5.07531 5.19253H5.88173C7.11462 5.19253 7.61087 5.65777 7.61087 6.82087V12.0936M0.818359 12.1711H16.3264"
                            stroke="#2E303D" strokeOpacity="0.49" strokeWidth="1.5508" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.06874 15.4971C8.80511 15.5901 8.37088 15.5901 8.10725 15.4971C5.85858 14.7294 0.833984 11.527 0.833984 6.0992C0.833984 3.70321 2.76473 1.76471 5.14521 1.76471C6.55644 1.76471 7.80484 2.44706 8.58799 3.50161C8.98638 2.96338 9.50528 2.52594 10.1031 2.22432C10.701 1.92271 11.3612 1.7653 12.0308 1.76471C14.4113 1.76471 16.342 3.70321 16.342 6.0992C16.342 11.527 11.3174 14.7294 9.06874 15.4971Z"
                            stroke="#2E303D" strokeOpacity="0.49" strokeWidth="1.5508" strokeLinecap="round"
                            strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="product-desc" style={{flexDirection: 'column'}}>
                    <h1>Описание</h1>
                    <table>
                      <thead>
                      <tr>
                        <th>Изделия</th>
                        <th>Формат</th>
                        <th>Цена usd/pcs</th>
                        <th>Цена руб/шт</th>
                      </tr>
                      </thead>
                      <tbody>
                      {stone.variants.map((variant: {
                        format: string,
                        pricerub: string,
                        priceusd: string,
                        product: string
                      }) => (
                        <tr>
                          <td>{variant.product}</td>
                          <td>{variant.format}</td>
                          <td>{variant.priceusd}</td>
                          <td>{variant.pricerub}</td>
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div> : <Empty/>
          : null}
        <MoreProducts products={products}/>
      </div>
    </div>
  );
};

export default ProductPage;