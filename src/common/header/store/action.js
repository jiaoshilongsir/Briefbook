import * as contants from './contant.js'
import {fromJS} from 'immutable'
import axios from 'axios'
export const search_focus=()=>{
    return{
        type:contants.SEARCH_FOCUS
    }
}
export const search_blur=()=>{
    return{
        type:contants.SEARCH_BLUR
    }
}
export const getList=()=>{
    return (dispatch)=>{
        dispatch(getList_loading())
        axios.get('/mock/header.json')
        .then((res)=>{
            dispatch(getList_success(res.data.data))
        })
        .catch((error)=>{
            dispatch(getList_error(error))
        })
    }
}
export const haddleMouseEnter=()=>{
    return{
        type:contants.HADDLEMOUSEENTER
    }
}
export const haddleMouseLeave=()=>{
    return{
        type:contants.HADDLEMOUSELEAVE
    }
}
export const changePage=(page)=>{
    console.log(page)
    return{
        type:contants.CHANGEPAGE,
        page
    }
}
const getList_loading=()=>{
    return{
        type:contants.GETLIST_LOADING
    }
}
const getList_success=(data)=>{
    return{
        type:contants.GETLIST_SUCCESS,
        data:fromJS(data),
        titlePage:Math.ceil(data.length/10)
    }
}
const getList_error=(error)=>{
    return{
        type:contants.GETLIST_ERROR,
        error
    }
}
