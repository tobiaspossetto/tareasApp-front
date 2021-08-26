import React,{useEffect} from 'react'
import { Container } from '@material-ui/core'
import {useUser} from '../../context/UserContext'
import { useHistory  } from 'react-router-dom';
import './auth.css'

const SignUp = () => {

   
     const {isLogged} = useUser()
        let history = useHistory();
        useEffect(() => {
            if(isLogged){
                history.push("/");
            }
        }, [isLogged])

    return (
        <Container className="auth-container">
            <h1>Crear Cuenta</h1>
            <form className='form-auth'>
                <input  placeholder='Nombre' className='form-input' type="text"></input>
                <input placeholder='Correo' className='form-input' type="email"></input>
                <input placeholder='Contraseña'  className='form-input' type="password"></input>
                <input placeholder='Confirmar Contraseña'  className='form-input' type="password"></input>
                
                <span>El nombre o correo ya existe</span>

                <btn type="submit" className='form-btn'>Crear</btn>
            </form>
        </Container>
    )
}

export default SignUp
