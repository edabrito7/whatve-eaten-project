import styled from 'styled-components';

import  AvatarImg  from '../../assets/chef.png';
import {COLORS} from '../../utils/color.constans';


export const Card = styled.div`

    background-color: ${COLORS.primary};
    width: 350px;
    height: 600px;
    border: 10px solid ${COLORS.primary};
    border-radius: 15px;
    padding: 1.5rem 1rem;
`;


export const Avatar = styled.div`

    background-image: url(${AvatarImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 150px;
    width: 100%;


    @media screen and (max-width: 800px) {
        height: 75px;
    }
`;

export const Title = styled.h2`
    
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: ${COLORS.light};
`;