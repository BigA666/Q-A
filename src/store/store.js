import React from 'react'
import {createStore, combineReducers} from 'redux'
import reducers from './reducer'

let store = createStore(reducers)
export default store