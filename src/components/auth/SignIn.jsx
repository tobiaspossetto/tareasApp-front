import React,{useEffect} from 'react'
import { Container } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import {useUser} from '../../context/UserContext'
import { useHistory,Link  } from 'react-router-dom';
import './auth.css'
const SignIn = () => {

  
 const {isLogged,signIn,signInError,setSignInError} = useUser()


        let history = useHistory();
        useEffect(() => {
            if(isLogged){
                history.push("/");
            }
        }, [isLogged])

        const { register, handleSubmit, formState: { errors } } = useForm();
        
        const onsubmit = (data,e) => {
            signIn(data)
            e.target.reset()
            

        }
    return (
        <Container className="auth-container">
            <h1>Iniciar Sesión</h1>
            <form className='form-auth' onSubmit={handleSubmit(onsubmit)}>
                <input  placeholder='Nombre' name='username' className='form-input' type="text"
                
                {...register('username', {
                    required: {
                      value: true,
                      message: 'Este campo es obligatorio.'
                    }
                  })}
                ></input>
                  <span >{errors.username && errors.username.message}</span>
                <input placeholder='Contraseña' name='password' className='form-input' type="password"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Este campo es obligatorio.'
                    }
                  })}
                ></input>
                
                
                <span >{errors.password && errors.password.message}</span>
                {signInError !== null && <span>{signInError}</span>}
                <button type="submit" className='form-btn'>Ingresar</button>
               
            </form>
        </Container>
    )
}

export default SignIn

