import styled from 'styled-components';


import {COLORS} from '../../utils/color.constans';



export const Container = styled.div`

    display: flex;
    flex-direction: column;
`;



export const Labelstyles = styled.label`

    padding: 0.75rem 0rem;
    font-size: 1.25rem;
    text-transform: capitalize;
`;


export const Inputstyles = styled.input`

    border: none;
    border-radius: 5px;
    background-color: white;
    box-sizing: border-box;
    margin: 0;
    padding: 0.5rem;
    font-family: 'Londrina Solid';
    font-size: 1.2rem;
    

    &:focus {
        background-color: ${COLORS.light};
        outline: none;
    }
`;