import styled from 'styled-components'

export const LoginWrapper=styled.div`
    position:absolute;
    background:#f6f6f6;
    z-index:0;
    top:59px;
    left:0;
    right:0;
    bottom:0;
`;
export const LoginBox=styled.div`
    width:400px;
    margin:60px auto 0;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,0.1);
    border-radius:8px;
    box-sizing:border-box;
    padding:50px 50px 30px;
`;
export const LoginInput=styled.input`
    width:100%;
    height:50px;
    border-radius:8px;
    outline:none;
    border: 1px solid #c8c8c8;
    padding:4px 12px 4px 30px;
    box-sizing:border-box;
    margin:1px 0;
    ::-webkit-input-placeholder{
        color:#999999;
    }
`;
export const LoginButton=styled.div`
    width:100%;
    height:40px;
    text-align:center;
    line-height:40px;
    background-color:#3194D0;
    border-radius:30px;
    margin-top:20px;
    color:#ffffff;
    font-size:18px;
    cursor:pointer;
`;