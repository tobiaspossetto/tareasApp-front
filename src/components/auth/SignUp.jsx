import React,{useEffect, useState} from 'react'
import { Container } from '@material-ui/core'
import {useUser} from '../../context/UserContext'
import { useHistory  } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import './auth.css'

const SignUp = () => {

    const [passwords, setPasswords] = useState({password:'', passwordConfirm:''});
    const [passwordDiferents, setPasswordDiferents] = useState(false)
   const handleInputChange = (e) => {
        
        setPasswords({
            ...passwords,
            [e.target.name]:e.target.value
        })
        
    }
   //LIBRERIA REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors } } = useForm();
     const {isLogged, signUp,signUpError,setSignUpError} = useUser()
        let history = useHistory();
        useEffect(() => {
            if(isLogged){
                history.push("/");
            }
        }, [isLogged])








        
        const onsubmit = (data,e) => {
            let minLength = (passwords.password).split('') || [];
            setSignUpError(null)
            if(minLength.length < 6){
                setPasswordDiferents(true)
            }else{
                if(passwords.password === passwords.passwordConfirm && passwords.password !== ''){
                    setPasswordDiferents(false)
                    e.target.reset()
                    data.password = passwords.password
                    signUp(data)
                   
                    setPasswords({password:'', passwordConfirm:''})
                  
                }else{
                    setPasswordDiferents(true)
                }
            }
            
            
           
          }
    return (
        <Container className="auth-container">
            <h1>Crear Cuenta</h1>
            <form className='form-auth' onSubmit={handleSubmit(onsubmit)}>
                <input  placeholder='Nombre' name='username' className='form-input' type="text"
                
                {...register('username', {
                    required: {
                      value: true,
                      message: 'Este campo es obligatorio.'
                    },
                    minLength: {
                      value: 6,
                      message: 'Mínimo 6 carácteres'
                    }
                  })}
                ></input>
                <span  className='mensajeError'>{errors.username && errors.username.message}</span>
                <input placeholder='Correo' name='email' className='form-input' type="email"
                 {...register('email', {
                    required: {
                      value: true,
                      message: 'Este campo es obligatorio.'
                    },
                    minLength: {
                      value: 6,
                      message: 'Mínimo 6 carácteres'
                    }
                  })}
                
                ></input>
                <span  className='mensajeError'>{errors.email && errors.email.message}</span>
                <input placeholder='Contraseña'onChange={handleInputChange} name='password' className='form-input' type="password"
               
                ></input>
                 <span  className='mensajeError'>{errors.password && errors.password.message}</span>
                <input placeholder='Confirmar Contraseña'onChange={handleInputChange} name='passwordConfirm'  className='form-input' type="password"></input>
                
                {passwordDiferents&&<span>La contraseña es menor a 6 caracteres o las contraseñas no coinciden</span>}
                {signUpError !== null && <span>{signUpError}</span>}
               

                <button type="submit" className='form-btn'>Crear</button>
            </form>
        </Container>
    )
}

export default SignUp
