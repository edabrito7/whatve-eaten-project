import React from 'react';
import {Link} from 'react-router-dom';


import {Card, Avatar, Title} from '../../styles/card/card.styles';
import {Container} from '../../styles/container/container.styles';
import { Content } from './about.page.styles';

const AboutPage = () => {
    return(
        <Container>
            <Card>
                <Avatar/>
                <Title>What We Do</Title>
                <Content>
                    If you wonder what you've eaten lately.. this is for you.  
                </Content>
                <Content>
                    We keep track of what you eat and how many times you have.. just <Link to='/signup'>Sign up</Link> and enjoy!
                </Content>
                <Content>
                    but.. because we're awesome.. we let you try anonymously.
                </Content>
                <Content>
                    Paste an public url link to an image of what you've eaten below
                </Content>
            </Card>
        </Container>
        
    )
}


export default AboutPage;