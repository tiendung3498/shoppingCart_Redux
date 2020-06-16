import ProductReducer from "./Product";
import CartReducer from "./Cart";
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
});
export default RootReducer;