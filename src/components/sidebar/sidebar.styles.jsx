import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';

export const Container = styled.div`

    width: ${(props) => props.open ? '25vw' : '0px'};
    height: 100%;
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.5s;
    padding: ${(props) => props.open ? '2rem' : '0rem'};
    border-right: 5px solid ${COLORS.primary};
    background-color: ${COLORS.light}

`;

export const Title = styled.h2`

    
    font-size: 1.5rem;
    text-transform: uppercase;
`;

export const GridOptions = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    row-gap: 20px;

`;