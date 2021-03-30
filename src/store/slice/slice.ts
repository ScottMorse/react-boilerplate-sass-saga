
import { createSlice } from '@reduxjs/toolkit'

export interface SliceState {
  count: number;
}

const initialState: SliceState = {
  count: 0
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count++
    },
    decrementCount: (state) => {
      if(state.count > 0) state.count--
    },
    resetCount: (state) => {
      state.count = initialState.count
    }
  }
})