import React, {useState} from 'react';
import banner from '../../assets/img/catalog/banner.png'
import catalogLeft from '../../assets/img/catalog/catalog-left.png';
import catalogRight from '../../assets/img/catalog/catalog-right.png';
import catalogBottomRight from '../../assets/img/catalog/catalog-bottom-right.png';

import CustomSelect from "../../components/CustomSelect";
import Header from "../../layouts/Header/Header";
import Filter from "./Filter/Filter";

import './catalog.scss'
import Products from "../../components/Products/Products";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const Catalog: React.FC = () => {
  const quantity = 100;

  return (
    <div className='catalog'>
      <Header/>
      <div className="catalog-banner" style={{backgroundImage: `url(${banner})`}}>
        <h6>Мрамораная плитка</h6>
        <h1>ДОМ МРАМОРА</h1>
      </div>
      <h1 className="title">КАТАЛОГ</h1>
      <div className="catalog-inner">
        <img src={catalogLeft} className='catalog-left' alt=""/>
        <img src={catalogRight} className='catalog-right' alt=""/>
        <img src={catalogBottomRight} className='catalog-bottom-right' alt=""/>
        <Filter/>
        <div className="catalog-content">
          <div className='catalog-top'>
            <p>Всего камней : {quantity}</p>
            <p>
              Сортировать по:
              <CustomSelect options={options} />
            </p>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Catalog;