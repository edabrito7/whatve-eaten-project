import React, {useContext} from 'react';


import Options from '../../components/options/options';
import Panel from '../../components/panel/panel';

import userContext from '../../contexts/user/user.context';

import {Container} from './profile.page.styles';
const ProfilePage = () => {
    const user = useContext(userContext);
    console.log(user);
    return(
        <Container>
            <Options/>
            <Panel/>
        </Container>
        
    )
}


export default ProfilePage;