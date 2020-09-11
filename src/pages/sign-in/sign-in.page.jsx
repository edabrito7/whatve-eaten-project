import React, {useState} from 'react';

import {SignInWithGoogle} from '../../firebase/firebase'
import InputField from '../../components/inputfield/inputfield';
import {Card, Avatar, Title} from '../../styles/card/card.styles';
import {Container} from '../../styles/container/container.styles';
import {SubmitButtom, ContainerButtom} from './sign-in.page.styles';




const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const HandleSubmit = async event => {
        event.preventDefault()
        console.log("Submited");
        console.log(email);
        console.log(password);
    }

    return(
        <Container>
            <Card>
                <Avatar/>
                <Title>Sign In Page</Title>

                <form onSubmit={HandleSubmit}>
                    <InputField
                    label='email'
                    type='email'
                    placeholder='example@gmail.com'
                    value={email}
                    inputChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                    label='password'
                    type='password'
                    placeholder='SecretPsd123'
                    value={password}
                    inputChange={(e) => setPassword(e.target.value)}
                    />
                    <ContainerButtom>
                        <SubmitButtom type='submit'  text='Sign In'/>
                        <SubmitButtom onClick={SignInWithGoogle}  text='Sign In Google'/>
                    </ContainerButtom>
                </form>
            </Card>   
        </Container>
    )
}

export default SignInPage;