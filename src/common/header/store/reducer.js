import * as contants from './contant.js'
import {fromJS} from 'immutable'
//可以将js转化为immutable对象
const DefaultState=fromJS({
    focused:false,
    list:[],
    isLoading:false,
    error:null,
    page:1,
    titlePage:1,
    mouseIn:false,

});
export const reducer = (state =DefaultState , action={}) => {
    switch (action.type) {
        // immutable对象的set方法,会结合之前的immutable对象的值和设置的值，返回一个全新的对象
        case contants.SEARCH_FOCUS:
            return state.set('focused',true)
        case contants.SEARCH_BLUR:
            return state.set('focused',false)
        case contants.GETLIST_LOADING:
            return state.set('isLoading',true)
        case contants.GETLIST_SUCCESS:
            return state.set('list',action.data).set('titlePage',action.titlePage)
        case contants.GETLIST_ERROR:
            return state.set('error',action.error)
        case contants.HADDLEMOUSEENTER:
            return state.set('mouseIn',true)
        case contants.HADDLEMOUSELEAVE:
            return state.set('mouseIn',false)
        case contants.CHANGEPAGE:
            return state.set('page',action.page)           
        default:
            return state
    }
}