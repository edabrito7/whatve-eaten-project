import React,{useState,useEffect, useContext} from 'react';





import clarifaiApp from '../../clarifai/clarifai';
import InputField from '../inputfield/inputfield';
import Buttom from '../buttom/buttom';
import MyResponsivePie from '../chart-bar/chart';

import userContext from '../../contexts/user/user.context';
import {SideBarContext} from '../../providers/sidebar.providers';


import {AddFoodsIngredients,ReadFoodData } from '../../firebase/firebase';

import {Container,ContainerButtom,ContainerTitle, Icon, Title, PictureBox, ChartBox} from './panel.styles';





const Panel = () => {
    const [image, setImage] = useState('');
    const [data, setData] = useState(null);
    const [hasChanged, setHasChanged] = useState(false)
    const user = useContext(userContext);
    const openBar = useContext(SideBarContext);
    console.log("Panel",openBar.open)


 

    useEffect((user) => {
        (async () => {
            const foodFromFirestore = await ReadFoodData(user);
            setData(foodFromFirestore);
          })()
    },[hasChanged])


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
            const  AddToFirestore = filteredData.map( async (ingredient) => {
                console.log(ingredient)
                await AddFoodsIngredients(user, ingredient);
                await setHasChanged(!hasChanged)      
            })
            
            
            
        })
        .catch((err) => console.log(err.message))
    }

    return(
        <Container  open={openBar.open}>
            <div>
                <ContainerTitle>
                    <Icon onClick={openBar.toggleOpen} src="https://img.icons8.com/ios-filled/50/000000/menu.png"/>
                    <Title>Hello {user.displayName}...</Title>
                </ContainerTitle>
                <p>Insert a public photo of that amazing food you've eaten today!</p>
                <InputField
                label='Insert a link'
                value={image}
                type='text'
                placeholder='Remember it has to be a public link'
                inputChange={(e) => setImage(e.target.value)}
                />
                <ContainerButtom>
                    <Buttom onClick={Predict}  text='Predict'/>
                    <Buttom onClick={() => setImage('')}  text='Erase'/>
                </ContainerButtom>
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