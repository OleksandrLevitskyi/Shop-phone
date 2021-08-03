export const addProductToBasket = (productObj) => {
    return{
        type: "ADD_PRODUCT_BASKET",
        payload: productObj
    }
};

export const plusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
  });
  
  export const minusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
  });