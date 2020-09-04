import React, {useContext} from 'react';


import Options from '../../components/options/options';
import Panel from '../../components/panel/panel';
import Wrapper from '../../components/Wrapper/wrapper';

import userContext from '../../contexts/user/user.context';

import {Container} from './profile.page.styles';


const WrapperPanel = Wrapper(Panel)

const ProfilePage = () => {
    const user = useContext(userContext);
    return(
        <Container>
            <Options/>
            <WrapperPanel isloading={user} />
        </Container>
        
    )
}


export default ProfilePage;