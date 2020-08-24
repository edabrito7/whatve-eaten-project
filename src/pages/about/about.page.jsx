import React from 'react';

import Logo from '../../components/logo/logo';
import { Container, Card, Avatar } from './about.page.styles';

const AboutPage = () => {
    return(
        <Container>
            <Card>
                <Avatar/>
                <Logo/>
            </Card>
        </Container>
        
    )
}


export default AboutPage;