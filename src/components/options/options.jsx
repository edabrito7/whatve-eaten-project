import React from 'react';


import CardOption from '../card-option/card-option';
import {FOOD} from '../../utils/food.constants';
import {Container, GridOptions,Title} from './options.styles';


const Options = () => {
    const MapFood = FOOD.map( (food, key) => {
        return <CardOption image={food} key={key} />
    })
    return(
        <Container>
            <Title>Options</Title>
            <GridOptions>
                {MapFood}
            </GridOptions>
        </Container>
    )
}



export default Options;