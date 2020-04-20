import React, { Component } from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from './../style.js'
class Topic extends Component {
    render() {
        let {topicList}=this.props;
        const newtopicList=topicList.toJS();
        let NewTopicList=newtopicList.map(value=>{
            return(
                <TopicItem key={value.id}>
                    <img src={value.imgsrc} className='topicImg' alt='简书'/>
                    {value.title}
                </TopicItem>
            )
        })
        return (
            <TopicWrapper>
                {NewTopicList}
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return{
        topicList:state.getIn(['homeReducer','topicList'])
    }
}
const mapDispatchToProps=(dispatch,oenProps)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic);