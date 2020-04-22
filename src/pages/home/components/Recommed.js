import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {RecommedInfo,RecommedList,RecommedErw} from './../style.js'
class Recommed extends PureComponent{
    render() {
        let {recommedState}=this.props;
        let RcdList=recommedState.map(value=>{
            return(
                <RecommedList key={value.get('id')}>
                    <img src={value.get('imgsrc')} alt=''/>
                </RecommedList>
            )
        })
        return (
            <RecommedInfo>
                {RcdList}
                <RecommedErw>
                    <img src={require('./../../../images/erweima.png')} alt=''/>
                    <div className='ermdv'>
                        <p className='ermapp'>下载简书App ></p>
                        <p className='ermfind'>随时随地发现和创作内容</p>
                    </div>
                </RecommedErw>
            </RecommedInfo>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    recommedState:state.getIn(['homeReducer','recommedState'])
})

export default connect(mapStateToProps)(Recommed);