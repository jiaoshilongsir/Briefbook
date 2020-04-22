import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {TopicWrapper,TopicItem} from './../style.js'
class Topic extends PureComponent {
    render() {
        let {topicList,topicJson}=this.props;
        console.log('toppicJsonn',topicJson)
        let NewTopicList=topicJson.map(value=>{
            return(
                <TopicItem key={value.get('id')}>
                    {topicList.map(item=>{
                            if(item.get('id')===value.get('id')){
                                return (
                                    <img src={item.get('imgsrc')} className='topicImg' alt='' key={item.get('id')}/>  
                                )
                            }else{
                                return false;
                            }
                    })}
                    {value.get('title')}
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
        topicList:state.getIn(['homeReducer','topicList']),
        topicJson:state.getIn(['homeReducer','topicJson'])
    }
}
const mapDispatchToProps=(dispatch,oenProps)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic);