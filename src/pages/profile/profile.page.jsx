import React from 'react';


import Options from '../../components/options/options';
import {Container} from './profile.page.styles';
const ProfilePage = () => {
    return(
        <Container>
            <Options/>
            <h1>Hello Username</h1>
        </Container>
        
    )
}


export default ProfilePage;