import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';

export const Container = styled.div`

    padding: 1rem 3rem;
    padding-left: ${(props) => props.open ? '400px' : '3rem'};
    background-color: ${COLORS.secundary};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 20px;
    justify-items: center;
    transition: 0.5s;

    @media screen and (max-width: 1050px) {
        padding-left: ${(props) => props.open ? '300px' : '3rem'};
    }
`;

export const ContainerTitle = styled.div`

    display: flex;
    align-items: center;

`;


export const Icon = styled.img`

    margin-right: 0.5rem;
    height: 2rem;
    cursor: pointer;
`;

export const Title = styled.h3`

    font-size: 2rem;

`;


export const ContainerButtom = styled.div`

    margin: 1rem 0rem;
    display: flex;

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