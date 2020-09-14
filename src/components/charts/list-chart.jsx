import React from 'react';


import {List,Number, Icon, Ingredient, Title,ContainerListChart} from './list-chart.styles';


const ListChart = ({data}) => {

    const MappingData = data.map( ingredient => {
        const {id,value,name} = ingredient;
        return (
        <Ingredient key={id}>
            <Icon>
                <Number> {value}</Number>
            </Icon>
            {name}
        </Ingredient>
        )
    })

    return(
        <ContainerListChart>
            <Title>My Favs</Title>
            <List>
                {MappingData}
            </List>
        </ContainerListChart>
    )
}


export default ListChart;