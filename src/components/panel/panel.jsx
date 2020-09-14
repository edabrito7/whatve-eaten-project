import React,{useState,useEffect, useContext} from 'react';


import clarifaiApp from '../../clarifai/clarifai';
import InputField from '../inputfield/inputfield';
import Buttom from '../buttom/buttom';
import PieChart from '../charts/chart';
import ListChart from '../charts/list-chart';

import userContext from '../../contexts/user/user.context';
import {SideBarContext} from '../../providers/sidebar.providers';
import {ImageContext} from '../../providers/image.providers';


import {AddFoodsIngredients,ReadFoodData } from '../../firebase/firebase';

import {Container,ContainerButtom,ContainerTitle, Icon, Title, PictureBox, ChartBox, ChartTitle} from './panel.styles';





const Panel = () => {
    const [data, setData] = useState([]);
    const [hasChanged, setHasChanged] = useState(false)
    const user = useContext(userContext);
    const openBar = useContext(SideBarContext);
    const selection = useContext(ImageContext);


 

    useEffect(() => {
         (async () => {
            const foodFromFirestore = await ReadFoodData(user);
            setData(foodFromFirestore);
          })()
          // eslint-disable-next-line
    },[hasChanged])


    const Predict =  () => {
        clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",selection.image)
        .then((res) => {
            const ingredients = res.outputs[0].data.concepts;
            const filteredData = ingredients.filter( (ingredient) => {
                return ingredient.value > 0.70;
            }).map( (ingredient) => {
                return {...ingredient, id:ingredient.name, value: 1}
            })
            filteredData.map( async (ingredient) => {
                await AddFoodsIngredients(user, ingredient);
                await setHasChanged(!hasChanged)      
            })   
            
        })
        .catch((err) => alert(err.message))
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
                value={selection.image}
                type='text'
                placeholder='Remember it has to be a public link'
                inputChange={(e) => selection.selectImage(e.target.value)}
                />
                <ContainerButtom>
                    <Buttom onClick={Predict}  text='Predict'/>
                    <Buttom onClick={() => selection.selectImage('')}  text='Erase'/>
                </ContainerButtom>
            </div>
            <PictureBox  imagen={selection.image}/>
            <ChartBox>
                <ChartTitle>My Favs</ChartTitle>
                {
                    (Array.isArray(data) && data.length > 0) ? 
                    (<React.Fragment><PieChart data={data}  />
                        <ListChart data={data}/></React.Fragment>   ) :
                    (<h2>No data to show...</h2> )
                }
            </ChartBox>
        </Container>
    )
}


export default Panel;