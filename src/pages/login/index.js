import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import * as loginAction from './store/action.js'
import {Redirect} from 'react-router-dom'
import {LoginWrapper,LoginBox,LoginInput,LoginButton} from './style.js'
class Login extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        let {isLogin}=this.props;
            if(!isLogin){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder='用户名' innerRef={(input)=>{this.account=input}} />
                        <LoginInput placeholder='密码' type='password' innerRef={(input)=>{this.password=input}} />
                        <LoginButton onClick={()=>this.props.getLoginData(this.account,this.password)}>登录</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
}
const mapStateToProps = (state, ownProps) => ({
    isLogin:state.getIn(['loginReducer','isLogin'])
})
    
const mapDispatchToProps =(dispatch)=> ({
    getLoginData(account,passwords){
        dispatch(loginAction.getlogindata(account,passwords))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)