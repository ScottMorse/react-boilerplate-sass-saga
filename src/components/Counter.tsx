
import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelectorTyped } from '../store'
import { slice } from '../store/slice/slice'
import { sliceSagaActions } from '../store/slice/saga'

export const Counter = () => {

  const { count } = useSelectorTyped(({ slice }) => slice)

  const dispatch = useDispatch()

  return (
    <div className="counter">
      <h3>Counter</h3>
      <div className="counter__count">
        Count: {count}
      </div>
        <button onClick={() => dispatch(slice.actions.incrementCount())}>
          Increment
        </button>
        <button onClick={() => dispatch(slice.actions.decrementCount())}>
          Decrement
        </button>
        <button onClick={() => dispatch(sliceSagaActions.INCREMENT_ASYNC_SAGA())}>
          Increment Async
        </button>
        <button onClick={() => dispatch(sliceSagaActions.DECREMENT_ASYNC_SAGA())}>
          Decrement Async
        </button>
        <button onClick={() => dispatch(slice.actions.resetCount())}>
          Reset
        </button>
    </div>
  )

}