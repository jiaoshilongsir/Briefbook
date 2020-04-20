import {} from './contant.js'
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
const defaultState=fromJS({
    topicList:[
        {id:1,title:'家庭',imgsrc:Img1},
        {id:2,title:'护眼壁纸',imgsrc:Img2},
        {id:3,title:'两性情感',imgsrc:Img3},
        {id:4,title:'正能量语录',imgsrc:Img4},
        {id:5,title:'算法',imgsrc:Img5},
        {id:6,title:'简书',imgsrc:Img6},
        {id:7,title:'壹 窗 丝 语',imgsrc:Img7},
        {id:8,title:'推荐文章',imgsrc:Img8},
        {id:9,title:'文艺青年',imgsrc:Img9},
        {id:10,title:'文集小岛',imgsrc:Img10},
        {id:11,title:'诗享天下',imgsrc:Img11},
    ],
    listState:[
        {id:1,author:'不许人间见白头',title:'希望有一个人，能听懂你的弦外之音',contant:'下午一位小学同学在微信里问我有没有复工，我说还没回去呢。 她又说已经零增长了，怎么还不回去？ 我说因为我身处高风险区，回去了还要自费住酒店隔离，...',imgsrc:ListImg1},
        {id:2,author:'那个北极星',title:'有一种乐观很可怕',contant:'下午一位小学同学在微信里问我有没有复工，我说还没回去呢。 她又说已经零增长了，怎么还不回去？ 我说因为我身处高风险区，回去了还要自费住酒店隔离，...',imgsrc:ListImg2},
        {id:3,author:'草原客',title:'鬼谷子：心软之人便是无福之人',contant:'01 单纯只知心软的人，看似极好相处，乐于满足别人。实则是毫无原则的表现，只懂一昧受气。 看过一则新闻报道，说警察抓了吸毒的一对夫妻，被抓进去之...',imgsrc:ListImg3},
        {id:4,author:'小正太可可龙',title:'真正的孤独（经典好文）',contant:'文：贾平凹 好多人在说自己孤独，说自己孤独的人其实并不孤独。孤独不是受到了冷落和遗弃，而是无知己，不被理解。真正的孤独者不言孤独，偶尔做些长啸，...',imgsrc:ListImg4},
        {id:5,author:'孤独的生还者',title:'自悟',contant:'1、从小我妈就告诉我：无论去哪里见朋友，都要带礼物，哪怕他很有钱，什么都不缺。 2、和女朋友一起玩，很多人只知道一条路，其实三条路都是通的。 3...',imgsrc:ListImg5},
        {id:6,author:'时雪月',title:'90后女孩曝光群租房内日常：我为什么劝你一定要多赚钱？',contant:'今天是精读君陪伴你终身成长的第2352天 1 认识一个邻居姐姐，她是我见过最“佛系”的人。 大学毕业那年，成绩优异的她原来有机会进入某知名企业，...',imgsrc:ListImg6},
        {id:7,author:'花之泪',title:'找了一个神一样的女友，会是什么感受？（1224大鱼号已发）',contant:'大家好，我是小王。 我今年二十岁，找了一个比我大五岁的女朋友。年龄不是问题，只是她的一些言行，让我陷入了左右为难的境地。 我们最初相识于一场饭局...',imgsrc:ListImg7},
        {id:8,author:'BKI',title:'一个人是否值得交往，看这四点就够了',contant:'有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结...',imgsrc:ListImg8},
        {id:9,author:'守望星空',title:'做人，不要自作多情，生活中真的没有人在乎你',contant:'三毛说：“一个朋友很好，两个朋友就多了一点，三个朋友就未免太多了。 知音，能有一个已经很好了，不必太多，如果实在没有，还有自己，好好对待自己，跟...',imgsrc:ListImg9},
        {id:10,author:'双灵儿',title:'读书变现技能养成记（二）——如何把读书升级成专业吸金技能',contant:'先要对职业读书人的背景有两个认识： 1、职业读书人得益于现代的信息爆炸，更侧重于筛选。所以职业读书人能产生拆选价值。 2、行业还处于野蛮生长期，...',imgsrc:ListImg10},
        {id:11,author:'木兮❤',title:'做了这么久的程序员，你知道为什么会有Lambda表达式吗？',contant:'享学课堂特邀作者：老顾转载请声明出处！ 前言 Java8有一些新的特性，今天老顾给大家分享一下关于Lambda表达式的由来，一开始感觉Lambd...',imgsrc:ListImg11},     
        {id:12,author:'苏雨Loner',title:'两瓶饮料',contant:'父亲常年在外地打工，有一次，父亲回家，特意给儿子带了礼物，是两瓶饮料。儿子迫不及待地拧开瓶盖，咕咚就一大口。 父亲赶紧问，好喝吗？儿子嘴里还含着...',imgsrc:ListImg12},
        {id:13,author:'Alone',title:'细读《挪威的森林》',contant:'《挪威的森林》，村上春树的代表作。因它的名气特别响亮，特定网购了一本，放在书架上放好几个月了，最近才有时间打开阅读。 花了六天时间读完，基本上是...',imgsrc:ListImg13},
    ]
})
export const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}