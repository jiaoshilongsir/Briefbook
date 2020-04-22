import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {WriterInfo,WriterUl,WriterTitle,WriterLi} from './../style.js'
class Writer extends PureComponent {
    render() {
        let {WriterState,writerJson}=this.props;
        let writerlis=writerJson.map(value=>{
            return(
                    <WriterLi key={value.get('id')}>
                        {WriterState.map(item=>{
                            if(item.get('id')===value.get('id')){
                                return(
                                    <img src={item.get('imgsrc')} alt='' key={item.get('id')}/>
                                )
                            }else{
                                return false;
                            }
                        })}
                        <span>+关注</span>
                        <p className='writer-user'>{value.get('username')}</p>
                        <p>{value.get('jieshao')}</p>
                    </WriterLi>
            )
        })
        return (
            <WriterInfo>
                <WriterTitle>
                    <span>推荐作者</span>
                    <span className='writer-hyp'>
                        <i className='iconfont'>&#xe613;</i>换一批</span>
                </WriterTitle>
                <WriterUl>
                    {writerlis}
                </WriterUl>
            </WriterInfo>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    WriterState:state.getIn(['homeReducer','writerState']),
    writerJson:state.getIn(['homeReducer','writerJson'])
})

export default connect(mapStateToProps)(Writer);