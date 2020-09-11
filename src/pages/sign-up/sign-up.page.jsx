import React, {useState} from 'react';


import InputField from '../../components/inputfield/inputfield';


import {Auth,AddUser} from '../../firebase/firebase';



import {Avatar, Title} from '../../styles/card/card.styles';
import {Container} from '../../styles/container/container.styles';
import {Icon, ContainerButtom, CardSignUp, SubmitButtom} from './sign-up.styles';

const SignUpPage = () => {
    const [visiblePassword, toogleVisiblePassword ] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setdisplayName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await Auth.createUserWithEmailAndPassword(email,password);
            AddUser(user,{displayName});
        } catch(error) {
            alert('Sorry, try later')
            console.log(error)
        }
    }

    return(
        <Container>
            <CardSignUp>
                <Avatar/>
                <Title>Sign Up Page</Title>
                <form onSubmit={handleSubmit} >
                    <InputField
                    type='text'
                    label='Full Name'
                    value={displayName}
                    placeholder='Jane Doe'
                    inputChange={(e) => setdisplayName(e.target.value)}
                    />
                    <InputField
                    type='email'
                    label='email'
                    value={email}
                    placeholder='janedoe@example.com'
                    inputChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
                    type={visiblePassword ? 'text' : 'password'}
                    label='password'
                    value={password}
                    placeholder='Pssd123'
                    inputChange={(e) => setPassword(e.target.value)}
                    />
                    <Icon 
                    onClick={() => toogleVisiblePassword(!visiblePassword)} 
                    src="https://img.icons8.com/material-sharp/24/000000/visible.png"
                    />
                    <ContainerButtom>    
                        <SubmitButtom type='submit'  text='Sign Up'/>    
                    </ContainerButtom>
                </form>
            </CardSignUp>
        </Container>
    )
}

export default SignUpPage;