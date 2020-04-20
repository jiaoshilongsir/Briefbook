import React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style.js'
import Topic from './components/Topic'
import List from './components/List'
import Recommed from './components/Recommed'
import Writer from './components/Writer'
import Img1 from './../../images/2010011702484909.jpeg'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
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
            </HomeWrapper>
        )
    }
}
export default Home;