import React, {useContext} from 'react';

import {FavContext} from '../../providers/fav.providers';

import {Container} from './card-option.styles';

const CardOption = ({image}) => {
    const favs = useContext(FavContext);
    const selectFav = () => {
        return favs.selectFav(image);
    }

    return(
        <Container
        onClick={selectFav}
        image={image}
        />
    )
}


export default CardOption;