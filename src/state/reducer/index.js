//Ek application mein kaafi saarey reducer function ho sakte hain
//'combineReducers'..saarey hi reducer functions ko ek saath include krke wrap krta hain

import { combineReducers } from "redux";
import  amountReducer  from "./amountReducer";

const reducers=combineReducers({
    amount: amountReducer    //yaha par hi ..ham saarey reducer functions ko include kr sakte hain..agar hai toh[comma laga krke]
})
export default reducers;