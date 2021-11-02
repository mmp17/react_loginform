import styled from "styled-components";
import { ReactComponent as User } from './icon/user.svg';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #2A393E;
width:100%;
height: 100vh;
color: white;
`

export const Wrapper = styled.div`
width: 360px;
height: fit-content;
border: 2px solid #445859;
margin: 15px;
padding: 30px;
border-radius:5px;
display: flex;
//justify-content: center;
flex-direction: column; 
align-items: center;
box-sizing: border-box;
`

export const Description = styled.div`
color: white;
font-weight: 600;
font-size: 22px;
`

export const Title = styled.div`
color: #E7C961;
font-size: 28px;
`

export const InputWrapper = styled.div`
position: relative;
display: flex;
width: 100%;
`

export const Input = styled.input`
width: 100%;
height: 45px;
border-radius: 4px;
background-color: rgba(104,105,102, 0.1);
border: 1px solid #354545;
margin-top: 20px;
outline: none;
padding-left: 40px;
color: white;
font-size: 22px;
`

export const UserIcon = styled(User)`
position: absolute;
top: 50%;
left: 10px;
width: 20px;
`

export const Button = styled.button`
width: 123px;
height: 45px;
background: #00908D;
color: white;
font-weight: 700;
font-size: 22px;
margin-top: ${(props)=>props.select? '0': '20px'};
margin-left: auto;
border: none;
outline: none;
border-radius: 4px;
`

export const Info = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin-top: 20px;
`

export const CheckBox = styled.input`
width: 50px;
height: 50px;
background-color: rgba(104,105,102, 0.1);
border: 1px solid #354545;
margin-right: 10px;
`

export const Span = styled.span`
display: flex;
width: 120px;
justify-content: center;
align-items: center;
`

export const Forget = styled.div`
margin-left: auto;
margin-top: 20px;
color: white;
font-weight: 400;
font-style: italic;
`