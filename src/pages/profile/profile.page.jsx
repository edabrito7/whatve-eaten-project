import React from 'react';


import Options from '../../components/options/options';
import Panel from '../../components/panel/panel';
import {Container} from './profile.page.styles';
const ProfilePage = () => {
    return(
        <Container>
            <Options/>
            <Panel/>
        </Container>
        
    )
}


export default ProfilePage;