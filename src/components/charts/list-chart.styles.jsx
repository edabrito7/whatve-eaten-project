import styled from 'styled-components';





export const Icon = styled.div`

    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
`;


export const Number = styled.span`
    font-size: 1rem;

`;

export const List = styled.ul`

    margin: 1rem;
    list-style: none;

`;

export const Ingredient = styled.li`

    display: flex;
    margin: 0.5rem;
`;

export const Title = styled.h3`

    font-size: 1.5rem;
    text-align: center;
`;


export const ContainerListChart = styled.div`

    display: none;

    @media screen and (max-width: 800px) {
        display: inline;
    }

`;
