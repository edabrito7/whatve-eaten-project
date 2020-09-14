import React,{useContext} from 'react';


import CardOption from '../card-option/card-option';


import FoodContext from '../../contexts/food/food.context';


import {Container, GridOptions,TitleContainer, Title, Close} from './sidebar.styles';
import {SideBarContext} from '../../providers/sidebar.providers';



const SideBar = () => {
    const foods = useContext(FoodContext);
    const sideBar = useContext(SideBarContext)
    const MapFood = foods.map( (food, key) => {
        return <CardOption image={food} key={key} />
    })
    return( 
        <Container  open={sideBar.open}>
            <TitleContainer>
            <Close onClick={sideBar.toggleOpen}/>
            <Title>
            
                Suggestions</Title>
            </TitleContainer>
            <GridOptions>
                {MapFood}
            </GridOptions>
        </Container>
    )
}



export default SideBar;