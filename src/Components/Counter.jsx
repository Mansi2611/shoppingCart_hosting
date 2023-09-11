import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Slices/CounterSlice'

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <br></br>
      <br></br>
      <div>
        {count}
      </div>
      <br></br>
      <br></br>
      <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default Counter
