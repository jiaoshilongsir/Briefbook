import React, { Component } from 'react'
import {connect} from 'react-redux'
import {ListItem,ListUl,ListLi,ListInfo} from './../style.js'
import Img1 from './../../../images/list01.jpg'
class List extends Component {
    render() {
        let {listState}=this.props;
        let Infos=listState.map(value=>{
            return(
            <ListLi key={value.get('id')}>
                        <ListInfo>
                            <a href='#' className='infotitle'>{value.get('title')}</a>
                            <p className='infocontant'>{value.get('contant')}</p>
                            <div className='meta'>
                                <span className='iconzs'><i className='iconfont'>&#xe811;</i></span>
                                <a>{value.get('author')}</a>
                                <a className='icondh'><i className='iconfont'>&#xe6cd;</i>165</a>
                                <span className='iconax'><i className='iconfont'>&#xe611;</i>168</span>
                            </div>
                        </ListInfo>
                        <img src={value.get('imgsrc')} alt='简书' />
                    </ListLi>
            )
        })
        return (
            <ListItem>
                <ListUl>
                    {Infos}
                </ListUl>
            </ListItem>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    listState:state.getIn(['homeReducer','listState'])
})

export default connect(mapStateToProps)(List);