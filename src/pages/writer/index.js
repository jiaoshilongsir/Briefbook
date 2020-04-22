import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Writer extends PureComponent{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        let {isLogin}=this.props;
            if(isLogin){
            return(
                <div>123</div>
            )
        }else{
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    isLogin:state.getIn(['loginReducer','isLogin'])
})
    

export default connect(mapStateToProps)(Writer)