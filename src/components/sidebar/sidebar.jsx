import React,{useContext} from 'react';


import CardOption from '../card-option/card-option';
import Buttom from '../buttom/buttom';


import FoodContext from '../../contexts/food/food.context';


import {Container, GridOptions,Title} from './sidebar.styles';
import {SideBarContext} from '../../providers/sidebar.providers';


const SideBar = () => {
    const foods = useContext(FoodContext);
    const sideBar = useContext(SideBarContext)
    const MapFood = foods.map( (food, key) => {
        return <CardOption image={food} key={key} />
    })
    return( 
        <Container  open={sideBar.open}>
            <Buttom onClick={sideBar.toggleOpen} text='X Close' />
            <Title>Profile</Title>
            <GridOptions>
                {MapFood}
            </GridOptions>
        </Container>
    )
}



export default SideBar;