import styled from 'styled-components'

export const Detailbody=styled.div`
    background:#F9F9F9;
`;
export const DetailWrapper=styled.div`
    width:1000px;
    margin:0 auto;
    overflow:hidden;
    padding:10px 16px 0;
`;
export const Header=styled.div`
    font-size:30px;
    font-weight:700;
    margin-bottom:15px;
    text-align:center;
`;
export const DetailLeft=styled.div`
    width:730px;
    float:left;
    padding:24px;
    background:#ffffff;
    box-sizing:border-box;
`;
export const Content=styled.div`
    img{
        display:block;
        width:680px;
        margin:0 auto;
        padding:0 0 25px;
    }
    p{
        margin-bottom:20px;
        font-size:16px;
        color:#404040;
        line-height:30px;
    }
`;
export const DetailRight=styled.div`
    width:260px;
    float:right;
    background:blue;
    padding:16px;
    background:#ffffff;
    box-sizing:border-box;
`;
export const Loading=styled.div`
    position:absolute;
    width:600px;
    height:100px;
    text-align:center;
    line-height:100px;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-300px;
    font-size:60px;
    

`;