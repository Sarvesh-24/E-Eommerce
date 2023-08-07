import {
  legacy_createStore as CreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from "./reducers/userReducer";
import {orderCreateReducer} from './reducers/orderReducer'
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister:userRegisterReducer,
  userDetails:userDetailsReducer,
  userUpdateProfile:userUpdateProfileReducer,
  orderCreate:orderCreateReducer,

});


const cartItemsFromStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;


const shippingFromStorage = localStorage.getItem("shippingAddress")
? JSON.parse(localStorage.getItem("shippingAddress"))
: {};

const paymentFromStorage = localStorage.getItem("paymentMethod")
? JSON.parse(localStorage.getItem("paymentMethod"))
: {};



const initialState = { cart: { cartItems: cartItemsFromStorage, shippingAddress:shippingFromStorage }, userLogin:{userInfo:userInfoFromStorage} };

const middlewares = [thunk];

const store = CreateStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
