import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'
import { useUser } from '../../context/UserContext'
import { useHistory } from 'react-router-dom';
import './auth.css'
import { useForm } from 'react-hook-form'
const ChangePassword = () => {
    const { isLogged, changePasswordError,
        changePassword, setChangePasswordError } = useUser()
    let history = useHistory();
    useEffect(() => {
        if (!isLogged) {
            history.push("/");
        }
    }, [isLogged])

    const [passwords, setPasswords] = useState({ newPassword: '', confirmNewPassword: '' });
    const [passwordDiferents, setPasswordDiferents] = useState(false)
    const handleInputChange = (e) => {

        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        })

    }
    //LIBRERIA REACT-HOOK-FORM
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onsubmit = (data, e) => {
        let minLength = (passwords.newPassword).split('') || [];
        setChangePasswordError(null)
        if (minLength.length < 6) {
            console.log('diferente o vacio')
            console.log(passwords.newPassword)
            setPasswordDiferents(true)
        } else {
            if (passwords.newPassword === passwords.confirmNewPassword && passwords.newPassword !== '') {
                setPasswordDiferents(false)
                e.target.reset()
                data.newPassword = passwords.newPassword
                data.confirmNewPassword = passwords.confirmNewPassword
                changePassword(data)
                console.log(data)
                setPasswords({ newPassword: '', confirmNewPassword: '' })

            } else {
                console.log('diferente o vacio')
                setPasswordDiferents(true)
            }
        }



    }


    return (
        <Container className="auth-container">

            <h1>Cambiar contraseña</h1>
            <form className='form-auth' onSubmit={handleSubmit(onsubmit)}>

                <input placeholder='Contraseña vieja' name='oldPassword' className='form-input' type="password"
                    {...register('oldPassword', {
                        required: {
                            value: true,
                            message: 'Este campo es obligatorio.'
                        }
                    })}
                ></input>
                <span >{errors.oldPassword && errors.oldPassword.message}</span>
                <input onChange={handleInputChange} placeholder='Contraseña nueva' name='newPassword' className='form-input' type="password"></input>
                <input onChange={handleInputChange} placeholder='Confirmar contraseña nueva' name='confirmNewPassword' className='form-input' type="password"></input>



                {passwordDiferents && <span>La nueva contraseña es menor a 6 caracteres o las contraseñas no coinciden</span>}
                {changePasswordError !== null && <span>{changePasswordError}</span>}
                <button type="submit" className='form-btn'>Enviar</button>
            </form>
        </Container>
    )
}

export default ChangePassword

