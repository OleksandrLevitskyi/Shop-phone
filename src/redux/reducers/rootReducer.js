import { combineReducers } from "redux";
import products from "./products";
import basket from '../reducers/basket'


export const rootReducer = combineReducers({
  products,
  basket
});