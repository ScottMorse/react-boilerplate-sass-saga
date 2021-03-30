import { createAction } from '@reduxjs/toolkit'
import { takeLatest, put, delay, all } from 'redux-saga/effects'

import { slice } from './slice'

function* incrementAsyncSaga(){
  yield delay(Math.round(Math.random() * 2000))
  yield put(slice.actions.incrementCount())
}

function* decrementAsyncSaga(){
  yield delay(Math.round(Math.random() * 2000))
  yield put(slice.actions.decrementCount())
}

export const sliceSagaActions = {
  INCREMENT_ASYNC_SAGA: createAction('INCREMENT_ASYNC_SAGA'),
  DECREMENT_ASYNC_SAGA: createAction('DECREMENT_ASYNC_SAGA'),
}

export function* sliceSaga(){
  yield all([
    takeLatest(sliceSagaActions.INCREMENT_ASYNC_SAGA.type, incrementAsyncSaga),
    takeLatest(sliceSagaActions.DECREMENT_ASYNC_SAGA.type, decrementAsyncSaga),
  ])
}