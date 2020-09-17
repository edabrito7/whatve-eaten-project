import React from 'react';


import Spinner from '../spinner/spinner';


const Wrapper = WrappedComponent => ({isloading,...otherProps}) => {
    return(
        isloading ? 
        (<WrappedComponent {...otherProps}/>) :
        (<Spinner />) 
        
    )
}


export default Wrapper;