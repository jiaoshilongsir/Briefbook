import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {ListItem,ListUl,ListLi,ListInfo,LearnMore} from './../style.js'
import * as homeAction from './../store/action.js'
class List extends PureComponent {
    render() {
        let {listState,listJson,getmorelist,listPage}=this.props;
        console.log('12333333333',listJson)
        let Infos=listJson.map((value,index)=>{
            return(
            <Link to={'/detail/'+value.get('id')} key={index}>
                <ListLi>
                            <ListInfo>
                                <span className='infotitle'>{value.get('title')}</span>
                                <p className='infocontant'>{value.get('contant')}</p>
                                <div className='meta'>
                                    <span className='iconzs'><i className='iconfont'>&#xe811;</i></span>
                                    <span>{value.get('author')}</span>
                                    <span className='icondh'><i className='iconfont'>&#xe6cd;</i>165</span>
                                    <span className='iconax'><i className='iconfont'>&#xe611;</i>168</span>
                                </div>
                            </ListInfo>
                            {listState.map(item=>{
                                if(item.get('id')===value.get('id')){
                                    return(
                                        <img src={item.get('imgsrc')} alt='简书' key={item.get('id')}/>
                                    )
                                }else{
                                    return false;
                                }
                            })}
                        </ListLi>
                    </Link>
            )
        })
        return (
            <ListItem>
                <ListUl>
                    {Infos}
                </ListUl>
                <LearnMore onClick={()=>getmorelist(listPage)}>
                    阅读更多
                </LearnMore>
            </ListItem>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    listState:state.getIn(['homeReducer','listState']),
    listJson:state.getIn(['homeReducer','listJson']),
    listPage:state.getIn(['homeReducer','listPage']),
})
const mapDispatchToProps = (dispatch)=>({
      getmorelist(listPage){
          dispatch(homeAction.getmore(listPage))
      }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);