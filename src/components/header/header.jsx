import React from 'react';

import Logo from '../logo/logo';
import {Container, NavigationLinks, OptionLink, SignUpLink } from './header.styles';



const Header = () => {
    return(
        <Container>
            <Logo />
            <NavigationLinks>
                <OptionLink to='/about' >About</OptionLink>
                <OptionLink to='/signin' >Sign In</OptionLink>
                <SignUpLink to='/signup'>Sign Up</SignUpLink>
            </NavigationLinks>
        </Container>
    )
}


export default Header;