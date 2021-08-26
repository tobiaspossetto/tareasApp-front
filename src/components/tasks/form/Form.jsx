import React from 'react'
import '../task.css'
const Form = () => {
    return (
        <div className='form'>
              
            <form >

                <input placeholder='Titulo'  type='text' className='form-input'/>
                <input  placeholder='Descripción' type='text' className='form-input'/>
                <button >Crear</button>
            </form>
        </div>
    )
}

export default Form
