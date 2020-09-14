import React, {useState, createContext} from 'react';



export const ImageContext = createContext({
    image: '',
    selectImage: () => {}
});


const ImageProvider = ({children}) => {
    const [image, setImage] = useState('');

    const selectImage = (link) => {
        setImage(link);
    }

    return <ImageContext.Provider value={{image,selectImage}}>{children}</ImageContext.Provider>
}


export default ImageProvider;

