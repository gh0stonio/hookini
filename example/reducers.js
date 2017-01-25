import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import appReducer from './pages/App/reducer'

export default function createReducer() {
  return combineReducers({
    routing: routerReducer,
    app: appReducer
  })
}
