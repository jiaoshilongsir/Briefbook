import {combineReducers} from 'redux-immutable'
import {reducer} from './../common/header/store/reducer.js'
import {homeReducer} from './../pages/home/store/reducer.js'
export const RootReducer=combineReducers({
    reducer,
    homeReducer
})