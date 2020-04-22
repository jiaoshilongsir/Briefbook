import * as detailContant from './contant.js'
import axios from 'axios'
export const getdetaildata=()=>{
    return (dispatch)=>{
        axios.get('/api/detail.json')
        .then(res=>{
            dispatch(getdetail(res))
        })
    }
}
const getdetail=(res)=>{
    return{
        type:detailContant.GET_DETAIL_DATA,
        detailJson:res.data.data
    }
}