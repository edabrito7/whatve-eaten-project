import React, {useContext} from 'react';

import {ImageContext} from '../../providers/image.providers';

import {Container} from './card-option.styles';

const CardOption = ({image}) => {
    const favs = useContext(ImageContext);
    const selectFav = () => {
        return favs.selectImage(image);
    }

    return(
        <Container
        onClick={selectFav}
        image={image}
        />
    )
}


export default CardOption;