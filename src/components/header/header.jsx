import React from 'react';




import {Auth} from '../../firebase/firebase';
import Logo from '../logo/logo';
import {Container, NavigationLinks, OptionLink, SignUpLink } from './header.styles';



const Header = ({isSigned}) => {

    return(
        <Container>
            <Logo />
            <NavigationLinks>
                {isSigned!=null ? (
                    <React.Fragment>
                        <OptionLink to='/about' >About</OptionLink>
                        <OptionLink to='/' as='div' onClick={() => Auth.signOut()}>Sign Out</OptionLink>
                        <SignUpLink to='/home'>Profile</SignUpLink>
                    </React.Fragment>
                ): (
                    <React.Fragment>
                        <OptionLink to='/about' >About</OptionLink>
                        <OptionLink to='/signin' >Sign In</OptionLink>
                        <SignUpLink to='/signup'>Sign Up</SignUpLink>
                    </React.Fragment>
                )}
            </NavigationLinks>
        </Container>
    )
}


export default Header;