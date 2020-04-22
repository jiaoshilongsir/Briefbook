import * as reducerContant from './contant.js'
import {fromJS} from 'immutable'
import Img1 from './../../../images/topic1.jpg'
import Img2 from './../../../images/topic2.jpg'
import Img3 from './../../../images/topic3.jpg'
import Img4 from './../../../images/topic4.jpg'
import Img5 from './../../../images/topic5.jpg'
import Img6 from './../../../images/topic6.jpg'
import Img7 from './../../../images/topic7.jpg'
import Img8 from './../../../images/topic8.jpg'
import Img9 from './../../../images/topic9.jpg'
import Img10 from './../../../images/topic10.jpg'
import Img11 from './../../../images/topic11.jpg'

import ListImg1 from './../../../images/list01.jpg'
import ListImg2 from './../../../images/list02.jpg'
import ListImg3 from './../../../images/list03.png'
import ListImg4 from './../../../images/list04.jpg'
import ListImg5 from './../../../images/list05.jpg'
import ListImg6 from './../../../images/list06.jpg'
import ListImg7 from './../../../images/list07.jpg'
import ListImg8 from './../../../images/list08.jpg'
import ListImg9 from './../../../images/list09.jpg'
import ListImg10 from './../../../images/list10.jpg'
import ListImg11 from './../../../images/list11.jpg'
import ListImg12 from './../../../images/list12.jpg'
import ListImg13 from './../../../images/list13.png'
import ListImg14 from './../../../images/list01.jpg'
import ListImg15 from './../../../images/list02.jpg'
import ListImg16 from './../../../images/list03.png'
import ListImg17 from './../../../images/list04.jpg'
import ListImg18 from './../../../images/list05.jpg'
import ListImg19 from './../../../images/list06.jpg'
import ListImg20 from './../../../images/list07.jpg'
import ListImg21 from './../../../images/list08.jpg'
import ListImg22 from './../../../images/list09.jpg'
import ListImg23 from './../../../images/list10.jpg'
import ListImg24 from './../../../images/list11.jpg'
import ListImg25 from './../../../images/list12.jpg'
import ListImg26 from './../../../images/list13.png'

import RecommedImg1 from './../../../images/banner01.png'
import RecommedImg2 from './../../../images/banner02.png'
import RecommedImg3 from './../../../images/banner03.png'
import RecommedImg4 from './../../../images/banner04.png'

import writerImg1 from './../../../images/writer01.jpg'
import writerImg2 from './../../../images/writer02.png'
import writerImg3 from './../../../images/writer03.jpg'
import writerImg4 from './../../../images/writer04.png'
import writerImg5 from './../../../images/writer05.jpg'
import writerImg6 from './../../../images/writer06.png'
import writerImg7 from './../../../images/writer07.jpg'
import writerImg8 from './../../../images/writer08.png'
import writerImg9 from './../../../images/writer09.jpg'
import writerImg10 from './../../../images/writer10.png'
const defaultState=fromJS({
    topicList:[
        {id:1,imgsrc:Img1},{id:2,imgsrc:Img2},{id:3,imgsrc:Img3},{id:4,imgsrc:Img4},{id:5,imgsrc:Img5},
        {id:6,imgsrc:Img6},{id:7,imgsrc:Img7},{id:8,imgsrc:Img8},{id:9,imgsrc:Img9},{id:10,imgsrc:Img10},
        {id:11,imgsrc:Img11},
    ],
    listState:[
        {id:1,imgsrc:ListImg1},{id:2,imgsrc:ListImg2},{id:3,imgsrc:ListImg3},{id:4,imgsrc:ListImg4},{id:5,imgsrc:ListImg5},
        {id:6,imgsrc:ListImg6},{id:7,imgsrc:ListImg7},{id:8,imgsrc:ListImg8},{id:9,imgsrc:ListImg9},{id:10,imgsrc:ListImg10},
        {id:11,imgsrc:ListImg11},{id:12,imgsrc:ListImg12},{id:13,imgsrc:ListImg13},{id:14,imgsrc:ListImg14},{id:15,imgsrc:ListImg15},
        {id:16,imgsrc:ListImg16},{id:17,imgsrc:ListImg17},{id:18,imgsrc:ListImg18},{id:19,imgsrc:ListImg19},{id:20,imgsrc:ListImg20},
        {id:21,imgsrc:ListImg21},{id:22,imgsrc:ListImg22},{id:23,imgsrc:ListImg23},{id:24,imgsrc:ListImg24},{id:25,imgsrc:ListImg25},{id:26,imgsrc:ListImg26},
    ],
    recommedState:[
        {id:1,imgsrc:RecommedImg1},{id:2,imgsrc:RecommedImg2},{id:3,imgsrc:RecommedImg3},{id:4,imgsrc:RecommedImg4}
    ],
    writerState:[
        {id:1,imgsrc:writerImg1},{id:2,imgsrc:writerImg2},{id:3,imgsrc:writerImg3},{id:4,imgsrc:writerImg4},
        {id:5,imgsrc:writerImg5},{id:6,imgsrc:writerImg6},{id:7,imgsrc:writerImg7},{id:8,imgsrc:writerImg8},
        {id:9,imgsrc:writerImg9},{id:10,imgsrc:writerImg10}
    ],
    topicJson:[],
    listJson:[],
    writerJson:[],
    listPage:0,
    showScroll:false
})
export const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case reducerContant.CHANGE_HOME_DATAS:
            // 返回的数据先用fronJS转换成immutable对象
                return state.merge({
                topicJson:fromJS(action.topicJsons),
                listJson:fromJS(action.listJsons),
                writerJson:fromJS(action.writerJsons)
            })
        case reducerContant.HOME_LIST:
            return state.merge({
            listJson:state.get('listJson').concat(action.homelistJsons),
            listPage: action.nextpage
            // return state.set('listJson',state.get('listJson').concat(action.homelistJsons))
        })
        case reducerContant.BACK_TOP:
            return state.set('showScroll',fromJS(action.showScroll))
        default:
            return state
    }
}