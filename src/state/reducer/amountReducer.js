//Reducer: Changes the state of an application..and returns new state

//amountReducer: amount ke sath kuch changes krenge

const amountReducer = (state=0,action)=>{
    if(action.type==='deposit'){
        return state + action.payload
    }
    else if(action.type==='withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }
}
export default amountReducer;