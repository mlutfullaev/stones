import React from 'react';
import Products from "../../../components/Products/Products";
import {ProductT} from "../../../@types";

const MoreProducts: React.FC<{products: ProductT[]}> = ({products}) => {
  return (
    <div className="more-products">
      <h1 className="title" style={{textAlign: 'left'}}>
        {/*<Products products={products} />*/}
      </h1>
    </div>
  );
};

export default MoreProducts;