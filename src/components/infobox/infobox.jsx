import React from 'react';

import Buttom from '../buttom/buttom';
import { Box, Avatar, Content } from './infobox.styles';

const InfoBox = () => {
    return(
        <Box>
            <Avatar/>
            <Content>
                <h1>Need help?</h1>
                <p>
                    I can tell you what you eat and more...
                </p>
                <Buttom text="see more" />
            </Content>
        </Box>
    )
}


export default InfoBox;