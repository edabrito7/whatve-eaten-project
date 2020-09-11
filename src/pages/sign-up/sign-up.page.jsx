import React, {useState} from 'react';


import InputField from '../../components/inputfield/inputfield';
import Buttom from '../../components/buttom/buttom';


import {Avatar, Title} from '../../styles/card/card.styles';
import {Container} from '../../styles/container/container.styles';
import {Icon, ContainerButtom, CardSignUp} from './sign-up.styles';

const SignUpPage = () => {
    const [visiblePassword, toogleVisiblePassword ] = useState(false)
    return(
        <Container>
            <CardSignUp>
                <Avatar/>
                <Title>Sign Up Page</Title>
                <form>
                    <InputField
                    type='text'
                    label='Full Name'
                    placeholder='Jane Doe'
                    />
                    <InputField
                    type='email'
                    label='email'
                    placeholder='janedoe@example.com'
                    />
                    <InputField
                    type={visiblePassword ? 'text' : 'password'}
                    label='password'
                    placeholder='Pssd123'
                    />
                    <Icon 
                    onClick={() => toogleVisiblePassword(!visiblePassword)} 
                    src="https://img.icons8.com/material-sharp/24/000000/visible.png"
                    />
                    <ContainerButtom>    
                        <Buttom  text='Sign Up'/>    
                    </ContainerButtom>
                </form>
            </CardSignUp>
        </Container>
    )
}

export default SignUpPage;