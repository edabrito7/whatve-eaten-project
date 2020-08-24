import React from 'react';

import InfoBox from '../../components/infobox/infobox';
import { Container, Wrapper } from './home.page.styles';


const HomePage = () => {
    return(
        <Container>
            <Wrapper>
                <InfoBox/>
            </Wrapper>
        </Container>
    )
}


export default HomePage;