import React from 'react';

import './products.scss'

type ProductsT = {
  products: [],
}

const Products: React.FC<ProductsT> = ({products}) => {
  return (
    <div className='product-list'>

    </div>
  );
};

export default Products;