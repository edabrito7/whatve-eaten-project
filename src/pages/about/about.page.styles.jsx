import styled from 'styled-components';

import  AvatarImg  from '../../assets/chef.png';
import { COLORS } from '../../utils/color.constans';


export const Container = styled.div`
    
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    height: 90vh;
    padding: 2rem;
    background-color: ${COLORS.light};
`;

export const Card = styled.div`
    background-color: ${COLORS.primary};
    width: 350px;
    height: 450px;
    border: 10px solid ${COLORS.primary};
    border-radius: 15px;
    padding: 1.5rem 1rem;
`;


export const Avatar = styled.div`

    background-image: url(${AvatarImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 200px;
    width: 100%;
`;