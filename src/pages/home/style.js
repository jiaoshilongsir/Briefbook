import styled from 'styled-components'

export const HomeWrapper =styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft=styled.div`
    width:625px;
    marin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight=styled.div`
    float:right;
    width:240px;
    padding:30px 0 0;
`;

export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    margin-left:-20px;
    overflow:hidden;
`;
export const TopicItem=styled.div`
    float:left;
    height:32px;
    margin:0 0 10px 20px;
    font-size:12px;
    line-height:32px;
    border:1px solid #dcdcdc;
    border-radius:5px;
    padding:3px 10px 3px 3px;
    cursor:pointer;
    background:rgb(245,245,245);
    .topicImg{
        width:32px;
        height:32px;
        margin-right:10px;
        display:block;
        float:left;
    }
`;
 export const ListItem=styled.div`
 `;
 export const ListUl=styled.ul`
    a{
        text-decoration:none;
    }
 `;
 export const ListLi=styled.li`
    border-bottom:1px solid #f0f0f0;
    margin:0 0 15px;
    position:relative;
    img{
        position:absolute;
        right:0;
        top:50%;
        margin-top:-50px;
        width:150px;
        height:100px;
        border:1px solid #999999;
        border-radius:4px;
    }
 `;
 export const ListInfo=styled.div`
 padding:15px 165px 20px 0;
    .infotitle{
        display:block;
        font-size:18px;
        text-decoration:none;
        color:#000;
        font-weight:700;
        margin-bottom:11px;
    }
    .infotitle:hover{
        text-decoration:underline;
    }
    .infocontant{
        font-size:13px;
        color:#999999;
        line-height:24px;
        margin-bottom:8px;
    }
    .meta{
        font-size:12px;
        height:20px;
        line-height:20px;
        margin-left:-8px;
        color:#b4b4b4;
        span,a{
            margin-left:8px;
            cursor:pointer;
        }
        .iconzs{
            color:#EDA49F;
        }
        .icondh,.iconax{
            color:#b4b4b4;
        }
        .icondh:hover{
            color:#666666;
        }
    }
 `;

 export const RecommedInfo=styled.div`
    padding-bottom:4px;
 `;
 export const RecommedList=styled.a`
    display:block;
    width:100%;
    height:50px;
    margin-bottom:6px;
    border-radius:4px;
    img{
        width:100%;
    }
 `;
 export const RecommedErw=styled.a`
    display:block;
    width:100%;
    padding:10px 22px;
    margin-bottom:30px;
    border-radius:6px;
    border:1px solid #f0f0f0;
    img{
        width:60px;
    }
    .ermdv{
        display:inline-block;
        margin-left:10px;
        vertical-align:top;
        padding:10px 0 0;
        .ermapp{
            font-size:15px;
            color:#333333;
            margin-bottom:8px;
        }
        .ermfind{
            font-size:13px;
            color:#999999;
        }
    }
 `;

 export const WriterInfo=styled.div`
    
 `;
 export const WriterTitle=styled.div`
    color:#969696;
    padding:8px;
    .writer-hyp{
        text-decoration:none;
        color:#969696;
        float:right;
        i{
            margin-right:2px;
        }
    }
 `;
 export const WriterUl=styled.ul`
 
 `;
 export const WriterLi=styled.li`
        margin-top:15px;
        overflow:hidden;
    img{
        width:48px;
        border-radius:50%;
        display:block;
        float:left;
    }
    span{
        display:block;
        float:right;
        color:#42C02E;
        font-size:13px;
        cursor:pointer;
    }
    .writer-user{
        color:#333;
        font-size:14px;
        padding-left:55px;
        margin-top:10px;

    }
    p{
        color:#969696;
        font-size:12px;
        padding-left:55px;
        margin-top:10px;
    }
 `;

 export const LearnMore=styled.div`
    height:40px;
    line-height:40px;
    background:#A5A5A5;
    border-radius:40px;
    text-align:center;
    margin:30px 0 60px 0;
    cursor:pointer; 
    color:#fff;
 `;

 export const BackTop=styled.div`
    position:fixed;
    width:50px;
    height:50px;
    text-align:center;
    line-height:50px;
    font-size:10px;
    cursor:pointer;
    border-box:box-sizing;
    border:1px solid #999999;
    bottom:50px;
    right:50px;
    background:#fff;
 `;