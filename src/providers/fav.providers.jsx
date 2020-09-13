import React, {useState, createContext} from 'react';



export const FavContext = createContext({
    favSelected: '',
    selectFav: () => {}
});


const FavProvider = ({children}) => {
    const [favSelected, setFavSelected] = useState('');

    const selectFav = (fav) => {
        console.log(favSelected)
        setFavSelected(fav);
    }

    return <FavContext.Provider value={{favSelected,selectFav}}>{children}</FavContext.Provider>
}


export default FavProvider;

