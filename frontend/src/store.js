
import {legacy_createStore as CreateStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productDetailReducer} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailReducer,
    cart:cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): [];


const initialState = {cart: {cartItems: cartItemsFromStorage}};

const middlewares = [thunk];

const store = CreateStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;