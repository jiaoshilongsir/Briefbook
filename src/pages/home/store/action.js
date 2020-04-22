import * as homeconstant from './contant.js'
import axios from 'axios'
import {fromJS} from 'immutable'
export const getHomeInfo=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json')
            .then(res=>{
               dispatch(changehomedata(res))
            })
    }
}
const changehomedata=(res)=>{
    return{
        type:homeconstant.CHANGE_HOME_DATAS,
        topicJsons:res.data.data.topicList,
        listJsons:res.data.data.listState,
        writerJsons:res.data.data.writerState
    }
}
export const getmore=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page)
        .then(res=>{
            dispatch(getmoredata(res,page+1))
        })
    }
}
const getmoredata=(res,nextpage)=>{
            console.log('88888888888888888',res.data.data)
    return{
        type:homeconstant.HOME_LIST,
        homelistJsons:fromJS(res.data.data.listState),
        nextpage
    }
}
export const getshowScroll=(data)=>{
    return{
        type:homeconstant.BACK_TOP,
        showScroll:data
    }
}