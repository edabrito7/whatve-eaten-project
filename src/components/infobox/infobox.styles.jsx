import styled from 'styled-components';

import AvatarImg from '../../assets/chef.png'
import {COLORS} from '../../utils/color.constans';


import {Link} from 'react-router-dom';

export const Box = styled.div`
    width: 200px;
    height: 350px;
    background-color: #ff9709;
    border: 5px solid #ff9709;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;



export const Avatar = styled.div`
    background-image: url(${AvatarImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 150px;
    @media screen and (max-width: 800px) {
        height: 40px;
    }

`;


export const Content = styled.section`
    display: block;
    color: ${COLORS.dark};

    @media screen and (max-width: 800px) {
        display: none;
    }

`;






export const OptionLink = styled(Link)`
    
    border: 5px solid ${COLORS.light};
    border-radius: 10px;
    background-color: ${COLORS.light};
    color: ${COLORS.primary};
    cursor: pointer;
    padding: 0.25rem;

    &:hover {
        color: ${COLORS.secundary};
    }

`;