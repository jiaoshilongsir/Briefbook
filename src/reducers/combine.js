import {combineReducers} from 'redux-immutable'
import {reducer} from './../common/header/store/reducer.js'
import {homeReducer} from './../pages/home/store/reducer.js'
import {detailReducer} from './../pages/detail/store/reducer.js'
import {loginReducer} from './../pages/login/store/reducer.js'
export const RootReducer=combineReducers({
    reducer,
    homeReducer,
    detailReducer,
    loginReducer
})