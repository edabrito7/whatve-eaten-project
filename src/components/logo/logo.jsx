import React from 'react';
import { Link } from 'react-router-dom';

import {LogoStyles} from './logo.styles';

const Logo = () => {
    return(
        <div>
            <Link to='/'>
                <LogoStyles>What've Eaten!</LogoStyles>
            </Link>
        </div>
    )
}


export default Logo;