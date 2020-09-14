import React, { useContext} from 'react';


import SideBar from '../../components/sidebar/sidebar';
import Panel from '../../components/panel/panel';
import Wrapper from '../../components/Wrapper/wrapper';

import userContext from '../../contexts/user/user.context';
import SideBarProvider from '../../providers/sidebar.providers';
import ImageProvider from '../../providers/image.providers';
import {Container} from './profile.page.styles';


const WrapperPanel = Wrapper(Panel)

const ProfilePage = () => {
    const user = useContext(userContext);
    return(
        <Container>
            <ImageProvider>
                <SideBarProvider>
                    <SideBar/>
                    <WrapperPanel isloading={user} />
                </SideBarProvider>
            </ImageProvider>
        </Container>
        
    )
}


export default ProfilePage;