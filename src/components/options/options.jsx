import React,{useContext} from 'react';


import CardOption from '../card-option/card-option';

import FoodContext from '../../contexts/food/food.context';

import {Container, GridOptions,Title} from './options.styles';


const Options = () => {
    const foods = useContext(FoodContext);
    const MapFood = foods.map( (food, key) => {
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