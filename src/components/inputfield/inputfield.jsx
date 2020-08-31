import React from 'react';


import { Container, Inputstyles,Labelstyles } from './inputfield.style';



const InputField = ({label, type, placeholder, inputChange, value }) => {
    return(
        <Container>
            <Labelstyles>{label}:</Labelstyles>
            <Inputstyles 
            type={type} 
            placeholder={placeholder} 
            onChange={inputChange}
            value={value}
            />
        </Container>
    )
}



export default InputField;