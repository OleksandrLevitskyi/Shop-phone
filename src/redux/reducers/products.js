const initState = {
    items: [],
    isLoaded: false,
  };
  
  function products(state = initState, action) {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, items: action.payload };
      default:
        return state;
    }
  }
  
  export default products;