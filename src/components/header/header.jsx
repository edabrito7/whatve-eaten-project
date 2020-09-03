import React, {useContext} from 'react';

import UserContext from '../../contexts/user/user.context';


import {Auth} from '../../firebase/firebase';
import Logo from '../logo/logo';
import {Container, NavigationLinks, OptionLink, SignUpLink } from './header.styles';



const Header = ({isSigned}) => {
    const user = useContext(UserContext);
    console.log(user);

    const signingOut = () => {
        Auth.signOut();
    }

    return(
        <Container>
            <Logo />
            <NavigationLinks>
                {isSigned===true ? (
                    <React.Fragment>
                        <OptionLink to='/about' >About</OptionLink>
                        <OptionLink to='/' as='div' onClick={signingOut}>Sign Out</OptionLink>
                        <SignUpLink to='/home/123'>Profile</SignUpLink>
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