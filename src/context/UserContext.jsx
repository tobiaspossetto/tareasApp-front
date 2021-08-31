import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Axios from 'axios'
import Cookies from 'universal-cookie'
const UserContext = React.createContext();

export function UserProvider(props) {
    const cookies = new Cookies();
    //Este useEffect hace que cada vez que cambio de ruta empiezo desde arriba
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState({});
    const [signUpError, setSignUpError] = useState(null)
    const [signInError, setSignInError] = useState(null);
    const [changePasswordError, setChangePasswordError] = useState(null)

    useEffect(() => {
        const user = cookies.get('username')
        if (user) {
            setUserData({ id: cookies.get('id'), username: cookies.get('username'), email: cookies.get('email'), token: cookies.get('token') })
            setIsLogged(true)
        }
    }, [])

    const createCookie = (data) => {
        
        cookies.set('id', data.id, { maxAge: 20 }, { path: '/' });
        cookies.set('username', data.username, { maxAge: 20 }, { path: '/' });
        cookies.set('email', data.email, { maxAge: 20 }, { path: '/' });
        cookies.set('token', data.token, { maxAge: 20 }, { path: '/' });
        setUserData(data)
        setIsLogged(true)
    }

    const signUp = (userDataSignUp) => {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/users/sign-up',
            data: userDataSignUp

        }).then(response => {

            setSignUpError(null)
            createCookie(response.data)
        })
            .catch(err => { setSignUpError(err.response.data) })
    }

    const signIn = (userDataSignIn) => {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/users/sign-in',
            data: userDataSignIn
        })
        .then(response => {
            setSignInError(null)
            createCookie(response.data)
        })
        .catch(err => { setSignInError(err.response.data) })
    }


    const logOut = () => {
        setIsLogged(false)
        setUserData({})
        cookies.set('id', null, { maxAge: 1 }, { path: '/' });
        cookies.set('username',null, { maxAge: 1 }, { path: '/' });
        cookies.set('email', null, { maxAge: 1 }, { path: '/' });
        cookies.set('token', null, { maxAge: 1 }, { path: '/' });
    }

    const changePassword = (userDataChangePassword) => {
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/users/change-password',
            headers: { 'authorization': userData.token },
            data: userDataChangePassword
        })
            .then(response => {
                setChangePasswordError(null)
                logOut()
            })
            .catch(err => { setChangePasswordError(err.response.data) })
    }


    return <UserContext.Provider value={{
        isLogged,
        userData,
        signUp,
        signUpError,
        setSignUpError,
        userData,
        logOut,
        signIn,
        signInError,
        setSignInError,
        changePasswordError,
        changePassword,
        setChangePasswordError

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