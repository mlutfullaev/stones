import React from 'react';
import banner from '../../assets/img/catalog/banner.png'
import catalogLeft from '../../assets/img/catalog/catalog-left.png';
import catalogRight from '../../assets/img/catalog/catalog-right.png';
import catalogBottomRight from '../../assets/img/catalog/catalog-bottom-right.png';
import catalog from '../../assets/img/catalog/catalog.png';

import CustomSelect from "../../components/CustomSelect";
import Header from "../../layouts/Header/Header";
import Filter from "./Filter/Filter";

import './catalog.scss'
import Products from "../../components/Products/Products";
import {ProductT} from "../../@types";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
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

const Catalog: React.FC = () => {
  const quantity = 100;

  return (
    <div className='catalog'>
      <Header/>
      <img src={catalogLeft} className='catalog-left' alt=""/>
      <img src={catalogRight} className='catalog-right' alt=""/>
      <img src={catalogBottomRight} className='catalog-bottom-right' alt=""/>
      <div className="catalog-banner" style={{backgroundImage: `url(${banner})`}}>
        <h6>Мрамораная плитка</h6>
        <h1>ДОМ МРАМОРА</h1>
      </div>
      <h1 className="title">КАТАЛОГ</h1>
      <div className="container">
        <div className="catalog-inner">
          <Filter/>
          <div className="catalog-content">
            <div className='catalog-top'>
              <p>Всего камней : {quantity}</p>
              <div>
                <p>Сортировать по: </p>
                <CustomSelect options={options} />
              </div>
            </div>
            <Products products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;