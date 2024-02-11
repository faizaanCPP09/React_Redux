import React from 'react'
import { useDispatch, useSelector } from 'react-redux' //dispatch krne ke liye
import { bindActionCreators } from 'redux'
import { actionCreator } from '../state' //woh jo humney state ke ander hi 'index.js' filer banai thi..ussi ko import kr rahe hai


const Shop = () => {
  // In Redux, the dispatch function is used to dispatch actions to the Redux store. When an action is dispatched, it is sent to the reducers, which then update the state accordingly.
  const dispatch = useDispatch();
  const balance = useSelector(state =>state.amount)
  const{withdrawMoney, depositMoney}= bindActionCreators(actionCreator,dispatch)
  return (
    <div>
      <h4 className='my-3'>Deposit/Withdraw Money</h4>
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}> + </button>
       Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}> - </button>
    </div>
  )
}

export default Shop
