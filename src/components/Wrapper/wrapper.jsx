import React from 'react';




const Wrapper = WrappedComponent => ({isloading,...otherProps}) => {
    return(
        isloading ? 
        (<WrappedComponent {...otherProps}/>) :
        (<h1>Loading...</h1>) 
        
    )
}


export default Wrapper;