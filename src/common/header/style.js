import styled from 'styled-components'
import logoPic from './../../statics/logo.png'
export const HeaderWrapper=styled.div`
    height:58px;
    position:relative;
    z-index:0;
    border-bottom:1px solid #000;
`;
export const Logo=styled.a.attrs({
    href:'/'
})`
    position:absolute;
    display:block;
    top:0;
    left:0;
    height:56px;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav=styled.div`
    width:960px;
    margin:0 auto;
    height:100%;
`;
export const NavItem=styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        cursor:pointer;
        color:#969696;
    }
    &.right:hover{
        color:red;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const SearchWrapper=styled.div`
    position:relative;
    float:left;
    .fdjing{
        position:absolute;
        right:5px;
        bottom:5px;
        border-radius:15px;
        width:30px;
        height:30px;
        line-height:30px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        width:160px;
        transition:all 0.2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all 0.2s ease-out;
    }
    &.silde-exit-active{
        width:160px;
    }
`;

export const SearchInfo=styled.div`
    position:absolute;
    top:56px;
    left:0;
    width:240px;
    padding:0 20px;
    background:#fff;
    border-radius:5px;
    box-shadow:0 0 8px rgba(0,0,0,0.2)
`;
export const SearchInfoTitle=styled.div`
    margin:20px 0 15px 0;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoList=styled.div`
    overflow:hidden;
`;
export const SearchInfoItem=styled.a`
    padding:0 5px;
    line-height:20px;
    font-size:12ps;
    border:1px solid #ddd;
    color:#333;
    font-size:12px;
    border-radius:3px;
    display:block;
    float:left;
    margin:0 10px 15px 0;
    cursor:pointer;
`;
export const SearchInfoSwitch=styled.div`
    float:right;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        transition:all ease-in 0.2s;
        tranform-origin:center center;
    }
`;
export const Addition=styled.div`
  position:absolute;
  top:0;
  right:0; 
`;
export const Button=styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin:9px 20px 0 0;
    padding:0 20px;
    font-size:14px;
    border:1px solid #ec6149;
    cursor:pointer;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;