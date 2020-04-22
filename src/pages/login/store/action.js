import * as loginContant from './contant.js'
import axios from 'axios'

export const getlogindata=(accout,passwords)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account=' + accout + '&passwords=' + passwords)
        .then(res=>{
            const result=res.data.data
            if(result){
                dispatch(getlogin(res))
            }else{
                alert('登陆失败')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }       
}
const getlogin=(res)=>{
    return{
        type:loginContant.GET_LOGIN_DATA,
        value:true
    }
}   
export const exitlogin=()=>{
    return{
        type:loginContant.EXIT_LOGIN,
        value:false
    }
}