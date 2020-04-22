import {fromJS} from 'immutable'
import * as loginContant from './contant.js'
const defaultState=fromJS({
    isLogin:false
})
export const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case loginContant.GET_LOGIN_DATA:
            return state.set('isLogin',action.value)
        case loginContant.EXIT_LOGIN:
            return state.set('isLogin',action.value)
        default:
            return state
    }
}