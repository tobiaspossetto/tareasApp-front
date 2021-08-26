import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const UserContext = React.createContext();

export function UserProvider(props) {

    //Este useEffect hace que cada vez que cambio de ruta empiezo desde arriba
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [isLogged, setIsLogged] = useState(false);

    const [userData, setuserData] = useState({});



    return <UserContext.Provider value={{
        isLogged,
        userData

    }} {...props} />
}


export function useUser() {
    const context = React.useContext(UserContext)

    //asegurarme de que no lo estoy llamando en un componente que no es hijo
    //solo es una verificacion
    if (!context) {
        throw new Error('useUser debe estar dentro del provider UserContext')
    }

    return context;
}