import styled from 'styled-components';





export const Container = styled.div`

    width: 100px;
    height: 100px;
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    border: 4px solid black;
    cursor: pointer;
`;