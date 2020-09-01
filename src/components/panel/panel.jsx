import React,{useState} from 'react';





import clarifaiApp from '../../clarifai/clarifai';
import InputField from '../inputfield/inputfield';
import Buttom from '../buttom/buttom';
import MyResponsiveBar from '../chart-bar/chart';
import {Container,PictureBox, ChartBox} from './panel.styles';






const Panel = () => {
    const [image, setImage] = useState('');
    const [data, setData] = useState(null);
    const Predict =  () => {
        console.log(image)
        clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",image)
        .then((res) => {
            console.log(res.outputs[0].data.concepts)
            setData(res.outputs[0].data.concepts)
        })
        .catch((err) => console.log(err.message))
    }

    return(
        <Container>
            <div>
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
            <Buttom onClick={() => setImage('')}  text='Erase'/>
            </div>
            <PictureBox  imagen={image}/>
            <ChartBox>
                {
                    (data === null) ? 
                    (<h2>No data to show</h2> ) :
                    (<MyResponsiveBar   />)
                }
            </ChartBox>
        </Container>
    )
}


export default Panel;