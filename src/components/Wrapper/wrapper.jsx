import React from 'react';




import {Loader} from './wrapper.styles';
import {Container} from '../../styles/container/container.styles';

const Wrapper = WrappedComponent => ({isloading,...otherProps}) => {
    return(
        isloading ? 
        (<WrappedComponent {...otherProps}/>) :
        (<Container>
            <Loader/>
        </Container>) 
        
    )
}


export default Wrapper;