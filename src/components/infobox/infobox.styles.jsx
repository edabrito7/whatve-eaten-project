import styled from 'styled-components';

import AvatarImg from '../../assets/chef.png'


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

    @media screen and (max-width: 800px) {
        display: none;
    }

`;