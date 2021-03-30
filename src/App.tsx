import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store'

import { Counter } from './components/Counter'

import './sass/style.scss'

export const App = () => (
  <Provider store={store}>
    <div className="counter-view">
      <Counter/>
    </div>
  </Provider>
)