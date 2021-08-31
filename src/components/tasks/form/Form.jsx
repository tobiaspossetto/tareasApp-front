import React from 'react'
import '../task.css'
const Form = () => {
    return (
        <div className='form'>
              
            <form >

                <input placeholder='Titulo'  type='text' />
              
                <textarea rows="1" cols="50"  placeholder='Descripción'/>
                <button >Crear</button>
            </form>
        </div>
    )
}

export default Form
