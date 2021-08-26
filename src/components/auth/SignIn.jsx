import React,{useEffect} from 'react'
import { Container } from '@material-ui/core'

import {useUser} from '../../context/UserContext'
import { useHistory,Link  } from 'react-router-dom';
import './auth.css'
const SignIn = () => {

  
 const {isLogged} = useUser()
        let history = useHistory();
        useEffect(() => {
            if(isLogged){
                history.push("/");
            }
        }, [isLogged])
    return (
        <Container className="auth-container">
            <h1>Iniciar Sesión</h1>
            <form className='form-auth'>
                <input  placeholder='Nombre' className='form-input' type="text"></input>
                
                <input placeholder='Contraseña'  className='form-input' type="password"></input>
                
                
                <span>El nombre o correo ya existe</span>

                <btn type="submit" className='form-btn'>Ingresar</btn>
                <Link className='form-auth-linkPassword' to='/change-password'>Cambiar contraseña</Link>
            </form>
        </Container>
    )
}

export default SignIn

