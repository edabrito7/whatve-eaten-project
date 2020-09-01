import React from 'react';

import {Auth} from '../../firebase/firebase';
import Logo from '../logo/logo';
import {Container, NavigationLinks, OptionLink, SignUpLink } from './header.styles';



const Header = ({isSigned, userId}) => {
    return(
        <Container>
            <Logo />
            <NavigationLinks>
                {isSigned===true ? (
                    <React.Fragment>
                        <OptionLink to='/about' >About</OptionLink>
                        <OptionLink to='/' onCLick={Auth.signOut()} >Sign Out</OptionLink>
                        <SignUpLink to='/:id'>Profile</SignUpLink>
                    </React.Fragment>
                ): (
                    <React.Fragment>
                        <OptionLink to='/about' >About</OptionLink>
                        <OptionLink to='/signin' >Sign In</OptionLink>
                        <SignUpLink to={`/home/${userId}`}>Sign Up</SignUpLink>
                    </React.Fragment>
                )}
            </NavigationLinks>
        </Container>
    )
}


export default Header;