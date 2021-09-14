import React,{useEffect, useState, useContext} from 'react'
import { useForm } from 'react-hook-form'
import{useUser} from '../../../context/UserContext'
import { GlobalContext } from '../../../context/GlobalContext'
import '../task.css'
const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const {createError,newTask } = useContext(GlobalContext)
const [error, setError] = useState(false)
useEffect(() => {
    setError(createError)
}, [createError]);

useEffect(() => { setError(false)},[])

    const onsubmit = (data,e) => {
            console.log(data)
            newTask(data)
               e.target.reset()
               console.log(e.target)
            
           }
    return (

       
        <div className='form'>
              
            <form onSubmit={handleSubmit(onsubmit)}>

                <input maxlength="40" placeholder='Titulo' name='title'  type='text' 
                
                
                {...register('title', {
                    required: {
                      value: true,
                     
                      message: 'Este campo es obligatorio.'
                    },
                    minLength: {
                      value: 3,
                      message: 'Mínimo 3 carácteres'
                    }
                  })}
                
                />
                <span  className='mensajeError'>{errors.title && errors.title.message}</span>
                <textarea maxlength="200" rows="1" cols="50"  name='description' placeholder='Descripción'
                 {...register('description')}
                
                />
                <button >Crear</button>
                {   error &&
                    <span  className='mensajeError'>Ocurrio un problema, intente otra vez o vuelva a iniciar sesión</span>
                }
                
            </form>
        </div>
    )
}

export default Form
