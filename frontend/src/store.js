
import {legacy_createStore as CreateStore, combineReducers, applyMiddleware} from 'redux'

import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


const reducer = combineReducers({});

const initialState = {};

const middlewares = [thunk];

const store = CreateStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;