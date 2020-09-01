import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';

export const Container = styled.div`

    padding: 1rem 3rem;
    background-color: ${COLORS.secundary};
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 20px;
    justify-items: center;
`;


export const PictureBox = styled.div`

    margin-top: 2rem;
    width: 300px;
    height: 300px;
    border: 5px solid black;
    border-radius: 15px;
    background: url(${(props) => props.imagen});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

`;


export const ChartBox = styled.div`
    width: 100%;
    height: 400px;
    border: 5px solid black;
    border-radius: 15px;
    grid-column: span 2;


    @media screen and (max-width: 1000px) {
        grid-column: span 1;
    }

`;