import React from 'react';
import {Link} from "react-router-dom";

import './products.scss'

type ProductsT = {
  stones: any[],
}

const Products: React.FC<ProductsT> = ({stones}) => {
  return (
    <div className='product-list'>
      {stones.map((stone, i) => (
        <div key={i} className="product">
          <Link to='/product/12'>
            <img src={`http://1627061-ci09322.twc1.net:3001/upload/fayl/${stone.uploadedFile[0].id}`} alt=""/>
            <h3>{stone.title}</h3>
            <p>{stone.categoryTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;