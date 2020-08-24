import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const Container = styled.nav`
    width: 100%;
    height: 10vh;
    display: fixed;
    top: 0;
    padding: 0em 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff9709;


    @media screen and (max-width: 800px) {
        padding: 0em 0.25rem;
    }
`;



export const NavigationLinks = styled.ul`
    display: flex;
    align-items: center

`;


export const OptionLink = styled(Link)`
    
    display: inline;
    margin-left: 1rem;
    color: #fbeee4;
    font-size: 1.75rem;
    text-align: center;
    padding: 0.15rem 0.25rem;
    &:hover {
        color: #dd8000;
    }

    @media screen and (max-width: 800px) {
        font-size: 0.6rem;
    }

`;


export const SignUpLink = styled(OptionLink)`
    border: 5px solid #fbeee4;
    border-radius: 10px;
    background-color: #fbeee4;
    color: #ff9709;

    &:hover {
        color: #dd8000;
    }
`;

