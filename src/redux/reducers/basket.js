const initState = {
  items: {},
  totalPrice: 0,
  totalItems: 0,
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.cost + sum, 0)

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

function basket(state = initState, action) {
  switch (action.type) {
    case "ADD_PRODUCT_BASKET": {
        const currentProductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newObj = {
        ...state.items,
        [action.payload.id]: {
            items: currentProductItems,
            totalPrice: getTotalPrice(currentProductItems)
        },
      };
      const items = Object.values(newObj).map(obj => obj.items)
      const arrProduct = [].concat.apply([], items);
      const totalPrice = getTotalPrice(arrProduct);
      return {
        ...state,
        items: newObj,
        totalItems: arrProduct.length,
        totalPrice,
      };
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalItems = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      };
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalItems = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      };
    }
    default:
      return state;
  }
}

export default basket;
