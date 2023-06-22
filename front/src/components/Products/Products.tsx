import React from 'react';
import {Link} from "react-router-dom";

import './products.scss'
import {StoneT} from "../../@types";
import {HOST_URL} from "../../assets/consts";

type ProductsT = {
  stones: StoneT[],
}

const Products: React.FC<ProductsT> = ({stones}) => {
  return (
    <div className='product-list'>
      {stones.map((stone, i) => (
        <div key={i} className="product">
          <Link to={`/product/${stone.id}`}>
            <img src={`${HOST_URL}upload/fayl/${stone.uploadedFile[0].id}`} alt=""/>
            <h3>{stone.title}</h3>
            <p>{stone.categoryTitle}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;