import React from "react";
import "./BasketItem.css";

const BasketItem = ({
  name,
  id,
  totalItems,
  url,
  totalPrice,
  onMinus,
  onPlus,
}) => {
  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };
  return (
    <div>
      <div className="cont">
        <div className="basket_picture">
          <img className="basket_img" src={url} alt="" />
        </div>
        <div className="basket_name">
          <h3>{name}</h3>
        </div>
        <div className="basket_price">
          <h4>Цена</h4>
          <h3>{totalPrice}$</h3>
        </div>
        <div className="basket_button">
          <button className="minus" onClick={handleMinusItem}>
            -
          </button>
          <h3>{totalItems}</h3>

          <button className="plus" onClick={handlePlusItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
