import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counterSlice/counterSlice'

export const ReduxApp = () => {

   const counter = useSelector((store) => store.counter.value)
   const dispatch = useDispatch()
    return (
    <>
    <div>ReduxApp</div>

    <p> {counter} </p>

    <button onClick={ ()=> dispatch( increment()) } > aumentar </button>
    <button onClick={ ()=> dispatch( decrement()) } > decrementar </button>
    <button onClick={ ()=> dispatch( incrementByAmount(10)) } > aumentar 10 </button>

</>
  )
}
