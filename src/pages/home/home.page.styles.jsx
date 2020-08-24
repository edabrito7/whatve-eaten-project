import styled from 'styled-components';


import Img from '../../assets/background.jpg';
import ImgSmall from '../../assets/background-small.jpg'

export const Container = styled.div`
    background-image: url(${Img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 90vh;
    position: relative;
    animation-name:img-ani;
    animation-duration: 2s;   
    animation-timing-function: ease-in;


    @keyframes img-ani {
    from{opacity:0.2;}
    to{opacity: 1;}
    }

    @media screen and (max-width: 800px) {
        background-image: url(${ImgSmall});
        background-size: cover;
    }
`;


export const Wrapper = styled.div`

    position: absolute;
    bottom: 1rem;
    right: 4rem;

    @media screen and (max-width: 800px) {
        bottom: 0.5rem;
        right: 1rem;
    }

`; 