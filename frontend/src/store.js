
import {legacy_createStore as CreateStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer} from './reducers/productReducer'


const reducer = combineReducers({
    productList:productListReducer
});

const initialState = {};

const middlewares = [thunk];

const store = CreateStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;