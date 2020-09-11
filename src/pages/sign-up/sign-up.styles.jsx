import styled from 'styled-components';


import {Card} from '../../styles/card/card.styles';

export const Icon = styled.img`

    position: relative;
    left: 90%;
    bottom: 30px;
    cursor: pointer;


    @media screen and (max-width: 700px) {
        left: 85%;
    }
`;

export const ContainerButtom = styled.div`

    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

`;


export const CardSignUp = styled(Card)`

    height: 640px;

`;


