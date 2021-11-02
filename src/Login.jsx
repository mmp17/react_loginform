import React from "react";
import { Button, CheckBox, Description, Info, Input, Title, InputWrapper, Span, Wrapper, UserIcon, Forget } from './style'

function Login(){
    return(
        <Wrapper>
            <Description>
                Already have an account
            </Description>
            <Title>Log In Here</Title>
            <InputWrapper>
                <UserIcon />
                <Input placeholder='Username'/>
            </InputWrapper>
            <InputWrapper>
                <UserIcon />
                <Input placeholder='Password'/>
            </InputWrapper>
            <Info>
                <Span>
                <CheckBox type='checkbox' />
                Keep me logged in
                </Span>
                <Button select>Log In</Button>
            </Info>
            <Forget >Forgot Your Password?</Forget>
        </Wrapper>

    );
}

export default Login;