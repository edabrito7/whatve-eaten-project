import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';

export const Container = styled.div`

    width: ${(props) => props.open ? '400px' : '0px'};
    height: 100%;
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.5s;
    padding: ${(props) => props.open ? '2rem' : '0rem'};
    border-right: 5px solid ${COLORS.primary};
    background-color: ${COLORS.light};

    @media screen and (max-width: 500px) {
        width: ${(props) => props.open ? '100vw' : '0px'};
    }

`;



export const GridOptions = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    row-gap: 20px;

`;


export const TitleContainer = styled.div`

    display: flex;
    flex-wrap: wrap;

`;

export const Close = styled.div`

    background-image: url("https://img.icons8.com/dotty/80/000000/close-sign.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 64px;
    height: auto;
    cursor: pointer;
    margin: 0px 1rem;


    @media screen and (max-width: 1200px) {
        height: 64px;
    }

`;

export const Title = styled.h2`

    
    font-size: 1.5rem;
    text-transform: uppercase;
`;

