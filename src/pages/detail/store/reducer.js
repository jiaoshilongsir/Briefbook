import {fromJS} from 'immutable'
import * as detailContant from './contant.js'
const defaultState=fromJS({
    detailJson:[]
})
export const detailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case detailContant.GET_DETAIL_DATA:
            return state.set('detailJson',fromJS(action.detailJson))
        default:
            return state
    }
}   