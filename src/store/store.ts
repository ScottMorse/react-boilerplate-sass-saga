
import { configureStore, combineReducers, Store } from "@reduxjs/toolkit"
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { rootSaga } from './sagas'
import { slice } from './slice/slice'

const reducer = combineReducers({
  slice: slice.reducer
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [createLogger(), sagaMiddleware]
})

export type StoreState = ReturnType<typeof reducer>

export const useSelectorTyped = useSelector as TypedUseSelectorHook<StoreState>

sagaMiddleware.run(rootSaga)