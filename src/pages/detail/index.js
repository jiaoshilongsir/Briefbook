import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import * as detailAction from './store/action.js'
import {withRouter} from 'react-router-dom'
import {Detailbody,DetailWrapper,DetailLeft,DetailRight,Header,Content} from './style.js'
class Detail extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        let {detailJson}=this.props;
        console.log('ssssssssssssssssss',this.props)
        return(
            <Detailbody>
                <DetailWrapper>
                    <DetailLeft>
                        <Header>{detailJson.get('title')}</Header>
                        <Content dangerouslySetInnerHTML={{__html:detailJson.get('content')}}/>
                    </DetailLeft>
                    <DetailRight></DetailRight>
                </DetailWrapper>
            </Detailbody>
        )
    }
    componentDidMount(){
        this.props.getDetailDatas(this.props.match.params.id)
    }
}
const mapStateToProps = (state, ownProps) => ({
    detailJson:state.getIn(['detailReducer','detailJson'])
})
const mapDispatchToProps = (dispatch,ownProps)=> ({
    getDetailDatas(id){
        dispatch(detailAction.getdetaildata(),id)
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail))