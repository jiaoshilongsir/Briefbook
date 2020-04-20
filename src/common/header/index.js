import React,{Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,
        Button,SearchWrapper,SearchInfo,SearchInfoTitle,
        SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style.js'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import * as actions from './store/action.js'
// 无状态组件性能较高
class Header extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    getListArea(){
    const { focused, list, page, titlePage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList=list.toJS();
        const pageList=[]
        console.dir('sdsdsad',newList)
        for(let i=(page-1)*10;i<page*10;i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        if(focused||mouseIn){
            console.log('456',list)
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,titlePage,this.spinIcon)}>
                         <span ref={(icon)=>{this.spinIcon=icon}} class="iconfont huyian spin">&#xe613;</span> 换一换
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){ 
        const {focused,list,handleInputFocus,handleInputBlur} = this.props;
   
    return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={500}
                            in={focused}
                            classNames='slide'
                        >
                            <NavSearch  className={focused?'focused':''}
                                    onFocus={()=>handleInputFocus(list)}
                                     onBlur={handleInputBlur}
                                    >   
                                </NavSearch>
                            </CSSTransition>
                            <i className={focused?'focused iconfont fdjing':'iconfont fdjing'}>&#xe62b;</i>
                           {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                    <i className='iconfont'>&#xe6e5;</i>&nbsp;
                        写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )

}

    }
const mapStateToProps = (state, ownProps) => {
    // console.log('111111',state)
    return{
        // focused:state.get('reducer').get('focused')
        focused:state.getIn(['reducer','focused']),
        list:state.getIn(['reducer','list']),
        page:state.getIn(['reducer','page']),
        mouseIn:state.getIn(['reducer','mouseIn']),
        titlePage:state.getIn(['reducer','titlePage'])
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        handleInputFocus(list) {
            (list.size===0)&&dispatch(actions.getList())
			dispatch(actions.search_focus());
		},
		handleInputBlur() {
			dispatch(actions.search_blur());
		},
		handleMouseEnter() {
			dispatch(actions.haddleMouseEnter());
		},
		handleMouseLeave() {
			dispatch(actions.haddleMouseLeave());
		},
		handleChangePage(page, titlePage,spinIcon) {
            let origindeg=spinIcon.style.transform.replace(/[^0-9]/ig,'')
            if(origindeg){
                origindeg=parseInt(origindeg,10)
            }else{
                origindeg=0
            }
            spinIcon.style.transform='rotate('+(origindeg+360)+'deg)'
			if (page < titlePage) {
				dispatch(actions.changePage(page + 1));
			}else {
				dispatch(actions.changePage(1));
			}
		}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
   
        