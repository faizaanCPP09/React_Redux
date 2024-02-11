//This is my 'redux store' ...isko puri application access kr sakti hain

import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";    //'redux-thunk' asynchronous function ko execute krne mein help krta hain
import reducer from "./reducer";


//'Store' named function is created here:

export const store = createStore(reducer,{},applyMiddleware(thunk))

//createStore::pehle saare reducers ko leta hain..phir initial state..phir middleware
//createStore(reducers, initial-state{empty}, middleware)