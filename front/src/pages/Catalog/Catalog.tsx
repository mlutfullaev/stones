import React, {useEffect, useState} from "react";
import banner from "../../assets/img/catalog/banner.png";
import catalogLeft from "../../assets/img/catalog/catalog-left.png";
import catalogRight from "../../assets/img/catalog/catalog-right.png";
import catalogBottomRight from "../../assets/img/catalog/catalog-bottom-right.png";
import catalog from "../../assets/img/catalog/catalog.png";

import CustomSelect from "../../components/CustomSelect";
import Header from "../../layouts/Header/Header";
import Filter from "./Filter/Filter";

import "./catalog.scss";
import Products from "../../components/Products/Products";
import {ProductT} from "../../@types";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import {Link} from "react-router-dom";
import Empty from "../../components/Empty/Empty";

const options = [
  {value: "chocolate", label: "Chocolate"},
  {value: "strawberry", label: "Strawberry"},
  {value: "vanilla", label: "Vanilla"},
];
const products: ProductT[] = [
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
  {
    img: catalog,
    title: "Statuario Extra",
    type: "Мрамор"
  },
];

const Catalog: React.FC = () => {
  const quantity = 100;
  const [filterStatus, setFilterStatus] = useState(false);
  const [stones, setStones] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get("http://1627061-ci09322.twc1.net:3001/stones")
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setStones(res.data);
        console.log(res.data)
      })
      .catch(e => {
        setLoading(false);
        setError(true);
      })
  }, []);

  useEffect(() => {
    const filterCloser = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;

      if (target.classList.contains('filter-wrapper')) {
        setFilterStatus(false)
      }
    }
    document.addEventListener('click', filterCloser)

    return () => {
      document.removeEventListener('click', filterCloser)
    }
  }, []);
  return (
    <div className="catalog">
      <Header/>
      <img src={catalogLeft} className="catalog-left" alt=""/>
      <img src={catalogRight} className="catalog-right" alt=""/>
      <img src={catalogBottomRight} className="catalog-bottom-right" alt=""/>
      <div className="catalog-banner" style={{backgroundImage: `url(${banner})`}}>
        <h6>Мрамораная плитка</h6>
        <h1>ДОМ МРАМОРА</h1>
      </div>
      <h1 className="title">КАТАЛОГ</h1>
      <div className="container">
        <div className="catalog-inner">
          <Filter isOpen={filterStatus}/>
          <div className="catalog-content">
            <div className="catalog-top">
              <div>
                <button className="filter-btn" onClick={() => setFilterStatus(oldValue => !oldValue)}>
                  <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M875.9 148L629.1 425.4 616 440.2v435.7l-2.2-1.8-2.4-1.5L408 743.4V440.2l-13.1-14.8L148.1 148h727.8m0-52H148.1c-44.4 0-68.4 52.1-39.5 85.8L356 460v283.4c0 17.8 9.1 34.4 24.1 43.9l203.4 129.2c9.9 7.9 21.2 11.5 32.2 11.5 26.9 0 52.2-21.2 52.2-52.1V460l247.4-278.2c29-33.7 5-85.8-39.4-85.8z"/>
                  </svg>
                </button>
                <p>Всего камней : {quantity}</p>
              </div>
              <div>
                <p>Сортировать по: </p>
                <CustomSelect options={options}/>
              </div>
            </div>
            {loading && <Loading/>}
            {error && <Error/>}
            {!error && !loading ?
              stones.length ? <Products stones={stones}/> : <Empty />
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;