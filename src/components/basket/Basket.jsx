import React from "react";
import { useDispatch } from "react-redux";
import { plusCartItem, minusCartItem } from "../../redux/action/basket";
import Header from "../Header/Header";
import "../basket/Basket.css";
import { withRouter } from "react-router-dom";
import BasketItem from "../BasketItem/BasketItem";
import { useBasket } from "./useBasket";
function Basket() {
  const dispatch = useDispatch();
  const { items, totalItems, addedProducts } = useBasket();

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };
console.log(totalItems)

  return (
    <div>
      <Header />
      {Object.keys(totalItems).length ? (
        <div className="wrapper">
          <div className="wrapper_product">
            {addedProducts.map((obj) => (
              <BasketItem
                url={obj.url}
                id={obj.id}
                name={obj.name}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
                totalPrice={items[obj.id].totalPrice}
                totalItems={items[obj.id].items.length}
              />
            ))}
          </div>
          <div className="order">
            <div className="email">
              <h4>Email</h4>
              <input
                className="input"
                type="email"
                placeholder="email@example.com"
              />
            </div>
            <div className="password">
              <h4>Password</h4>
              <input className="input" type="password" placeholder="Password" />
            </div>
            <button className="order_btn">Оформить заказ</button>
          </div>
        </div>
      ) : (
        <div className="empty_basket">
          <h2>Корзина пуста, добавьте какой-либо товар</h2>
        </div>
      )}
    </div>
  );
}

export default withRouter(Basket);
