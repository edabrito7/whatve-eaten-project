import React, {useState,createContext} from 'react';


export const SideBarContext = createContext({
    open: false,
    toggleOpen: () => {}
})


const SideBarProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    return <SideBarContext.Provider value={{open,toggleOpen}}>{children}</SideBarContext.Provider>
}


export default SideBarProvider;