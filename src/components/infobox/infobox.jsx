import React from 'react';


import { Box, Avatar, Content, OptionLink } from './infobox.styles';

const InfoBox = () => {



    return(
        <Box>
            <Avatar/>
            <Content>
                <h1>Need help?</h1>
                <p>
                    I can tell you what you eat and more...
                </p>
                <OptionLink  to='/about' >See More</OptionLink>  
            </Content>
        </Box>
        
    )
}


export default InfoBox;