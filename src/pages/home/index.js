import React,{PureComponent} from 'react'
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style.js'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Recommed from './components/Recommed'
import Writer from './components/Writer'
import Img1 from './../../images/2010011702484909.jpeg'
import * as homeAction from './store/action.js'
class Home extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }
    gobacktop(){
        window.scrollTo(0,0)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.gotop)
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={Img1} alt='444'/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommed></Recommed>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={this.gobacktop}>返回顶部</BackTop>:''}  
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeDatas()
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.gotop)
    }
}
const mapStateToProps = (state, ownProps) => ({
    showScroll:state.getIn(['homeReducer','showScroll'])
})

const mapDispatchToProps = (dispatch)=>{
    return{
         changeHomeDatas(){
            dispatch(homeAction.getHomeInfo())
        },
        gotop(e){
           if(document.documentElement.scrollTop>=200){
               dispatch(homeAction.getshowScroll(true))
           }else{
            dispatch(homeAction.getshowScroll(false))
           }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);