import React from 'react';


import { ButtomStyle } from './buttom.styles';

const Buttom = ({text, ...props}) => {
    return(
        <ButtomStyle {...props}>
            {text}
        </ButtomStyle>
    )
}


export default Buttom;