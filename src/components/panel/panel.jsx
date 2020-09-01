import React,{useState} from 'react';

import clarifaiApp from '../../clarifai/clarifai';
import InputField from '../inputfield/inputfield';
import Buttom from '../buttom/buttom';
import {Container,PictureBox} from './panel.styles';

const Panel = () => {
    const [image, setImage] = useState('');
    console.log(clarifaiApp);
    const Predict =  () => {
        console.log(image)
        clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",image)
        .then((res) => console.log(res.outputs[0].data.concepts))
        .catch((err) => console.log(err.message))
    }

    return(
        <Container>
            <h3>Hello Username...</h3>
            <span>You data will display below</span>
            <p>Insert a link of you food below and you will see it -></p>
            <InputField
            label='Insert a link'
            value={image}
            type='text'
            placeholder='Remember it has to be a public link'
            inputChange={(e) => setImage(e.target.value)}
            />
            <Buttom onClick={Predict}  text='Predict'/>
            <PictureBox/>
        </Container>
    )
}


export default Panel;