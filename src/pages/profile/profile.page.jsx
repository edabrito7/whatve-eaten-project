import React, { useContext} from 'react';


import SideBar from '../../components/sidebar/sidebar';
import Panel from '../../components/panel/panel';
import Wrapper from '../../components/Wrapper/wrapper';

import userContext from '../../contexts/user/user.context';
import SideBarProvider from '../../providers/sidebar.providers';
import FavProvider from '../../providers/fav.providers';
import {Container} from './profile.page.styles';


const WrapperPanel = Wrapper(Panel)

const ProfilePage = () => {
    const user = useContext(userContext);
    return(
        <Container>
            <FavProvider>
                <SideBarProvider>
                    <SideBar/>
                    <WrapperPanel isloading={user} />
                </SideBarProvider>
            </FavProvider>
        </Container>
        
    )
}


export default ProfilePage;