import React, { Component } from 'react'

import { Text, Imagen404 } from './error-boundaries.styles';
import {Container} from '../../styles/container/container.styles';

class ErrorBoundaries extends Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }


    static getDerivedStateFromError (error) {
        return { hasErrored: true}
    }

    componentDidCatch(error, errorInfo) {
        //register error
    }


    render() {
        if(this.state.hasErrored) {
            return (
                <Container>
                    <div>
                        <Text>Oops.. Something went wrong</Text>
                        <Imagen404 src='https://i.imgur.com/qIufhof.png' alt='Something went wrong' />
                    </div>    
                </Container>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundaries;


