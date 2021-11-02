import React from 'react'
import {Description, Input, Title, InputWrapper, Wrapper, UserIcon, Button} from './style'

function Register() {
    return(
        <Wrapper>
            <Description>
                Don't have an account?
            </Description>
            <Title>Register Now</Title>
            <InputWrapper>
                <UserIcon />
                <Input placeholder='Desired Username'/>
            </InputWrapper>
            <InputWrapper>
                <UserIcon />
                <Input placeholder='Password'/>
            </InputWrapper>
            <InputWrapper>
                <UserIcon />
                <Input placeholder='Confirm Password'/>
            </InputWrapper>
            <Button>Log In</Button>
        </Wrapper>
    );
}

export default Register;