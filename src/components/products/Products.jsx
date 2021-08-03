import React from "react";
import "../products/Products.css";
import { useDispatch } from "react-redux";
import ProductBuy from "./ProductBuy";

function Products({id, name, cost, url, onClickAddProduct}) {
  const dispatch = useDispatch();

  const addProduct = () => {
    const obj = {
      id,
      name,
      url,
      cost,
    };
    onClickAddProduct({ ...obj });
    dispatch({
      type: "ADD_PRODUCT_BASKET",
      payload: obj,
    });
  };

  return (
    <div>
      <div className="row">
        <div className="product">
          <div className="card-body">
            <div className="immg">
              <img
                src={url}
                className="img"
                alt="#"
              ></img>
            </div>
            <h5>{name}</h5>
          </div>
          <div className="cost">
            <h3>{cost}$</h3>
          </div>
          <ProductBuy clickButton={addProduct} />
        </div>
        
      </div>
    </div>
  );
}

export default Products;
