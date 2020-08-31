import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';

export const Container = styled.div`

    width: 25vw;
    height: 90vh;
    padding: 2rem;
    border-right: 5px solid ${COLORS.primary};
    background-color: ${COLORS.light}

`;

export const Title = styled.h2`

    
    font-size: 1.5rem;
    text-transform: uppercase;
`;

export const GridOptions = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;

`;