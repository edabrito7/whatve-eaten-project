import styled, {keyframes} from 'styled-components';

import {COLORS} from '../../utils/color.constans';




const Ring = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`




export const Loader = styled.div`

    display: inline-block;
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -75px;
  
    &:after {
        content: " ";
        display: block;
        width: 200px;
        height: 200px;
        margin: 8px;
        border-radius: 50%;
        border: 12px solid ${COLORS.light};
        border-color: ${COLORS.terciary} transparent ${COLORS.terciary} transparent;
        animation: ${Ring} 1.2s linear infinite;
    }

`;