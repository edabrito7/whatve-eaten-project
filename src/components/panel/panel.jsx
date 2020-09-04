import React,{useState,useEffect, useContext} from 'react';





import clarifaiApp from '../../clarifai/clarifai';
import InputField from '../inputfield/inputfield';
import Buttom from '../buttom/buttom';
import MyResponsivePie from '../chart-bar/chart';

import userContext from '../../contexts/user/user.context';
import {AddFoodsIngredients,ReadFoodData } from '../../firebase/firebase';

import {Container,PictureBox, ChartBox} from './panel.styles';





const Panel = () => {
    const [image, setImage] = useState('');
    const [data, setData] = useState(null);
    const [hasChanged, setHasChanged] = useState(false)
    const user = useContext(userContext);


 

    useEffect(() => {
        (async () => {
            const foodFromFirestore = await ReadFoodData(user);
            console.log(foodFromFirestore);
            setData(foodFromFirestore);
            console.log(hasChanged);
          })()
    },[hasChanged])

    const AddItem = () => {
        console.log("On click data",data)
        setData((data) => data.map((ingredient) => ({...ingredient, value: ingredient.value + 1})))
    }

    const Predict =  () => {
        console.log(image)
        clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",image)
        .then((res) => {
            const ingredients = res.outputs[0].data.concepts;
            const filteredData = ingredients.filter( (ingredient) => {
                return ingredient.value > 0.70;
            }).map( (ingredient) => {
                return {...ingredient, id:ingredient.name, value: 1}
            })
            const  AddToFirestore = data.map( async (ingredient) => {
                console.log(ingredient)
                await AddFoodsIngredients(user, ingredient);
                await setHasChanged(!hasChanged)      
            })
            
            
            
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
            <Buttom onClick={AddItem} text='Add count'/>
            </div>
            <PictureBox  imagen={image}/>
            <ChartBox>
                {
                    (data === null) ? 
                    (<h2>No data to show</h2> ) :
                    (<MyResponsivePie data={data}  /> )
                }
            </ChartBox>
        </Container>
    )
}


export default Panel;