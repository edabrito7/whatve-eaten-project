import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';

export const Container = styled.div`

    padding: 1rem 3rem;
    background-color: ${COLORS.secundary};
    width: 80vw;
`;


export const PictureBox = styled.div`

    margin-top: 2rem;
    width: 300px;
    height: 300px;
    border: 5px solid black;
    border-radius: 15px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

`;