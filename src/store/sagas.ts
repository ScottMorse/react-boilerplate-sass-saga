
import { all } from 'redux-saga/effects'

import { sliceSaga } from './slice/saga'

export function* rootSaga(){
  yield all([
    sliceSaga()
  ])
}