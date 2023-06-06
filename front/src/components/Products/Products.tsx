import React from 'react';
import {Link} from "react-router-dom";
import {ProductT} from "../../@types";

import './products.scss'

type ProductsT = {
  products: ProductT[],
}

const Products: React.FC<ProductsT> = ({products}) => {
  return (
    <div className='product-list'>
      {products.map((product, i) => (
        <div key={i} className="product">
          <Link to='/product/12'>
            <img src={product.img} alt="product"/>
            <h3>{product.title}</h3>
            <p>{product.type}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;