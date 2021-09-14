import React, { useEffect, useContext,useState } from 'react';
import Task from './Task'
import Form from './form/Form';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useUser } from '../../context/UserContext'
import { Container } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalContext'
import './task.css'

const Tasks = () => {
    const { isLogged, userData } = useUser()
     const {tasks } = useContext(GlobalContext)
    const [tasksForRender, setTasksForRender] = useState([]);
    //TODO: VER SI NO ES NECESARIO
    

    useEffect(() => {
        setTasksForRender(tasks)
    }, [tasks]);
    return (
        <div className='tasks'>
            {
                !isLogged ? <Container className='notLogged'>
                    <p>Inicia sesión o registrate para guardar y ver tareas</p>
                    <Link className='notLogged-btn' to='/sign-in'>Iniciar sesión</Link>
                    <Link className='notLogged-btn' to='/sign-up'>Crear cuenta</Link>
                </Container> : <>

                    <h1 className="username">{userData.username}</h1>


                    <Container>
                        <Grid container spacing={2}>
                            <Grid className='gridForm' item xs={12} sm={12} md={6}>
                                <Form />

                            </Grid>
                        </Grid>

                        <h1 className="title">Mis Tareas</h1>
                        <Grid container spacing={2}>
                            {tasksForRender.map((task) =>{
                                return(<Grid item xs={12} sm={6} md={4}>
                                    <Task title={task.title} description={task.description} id={task.id} />
    
                                   </Grid>)
                            }
                                
                                )}



                          
                          
                        </Grid>
                    </Container>







                </>
            }
        </div>


    )
}

export default Tasks
{/* <div className="tasks">
            
<h1 className="username">tobigpossetto@gmail.com</h1>

  
    <Container>
        <Grid  container spacing={2}>
            <Grid className='gridForm'  item xs={12} sm={12} md={6}>
            <Form/>
                  
                </Grid>
            </Grid>
       
            <h1 className="title">Mis Tareas</h1>
        <Grid container  spacing={2}>

              
            
        
            <Grid  item xs={12} sm={6} md={4}>
                <Task />
                
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Task />
                
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Task />
                
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Task />
                
            </Grid>
            </Grid>
    </Container>
       



    
    



</div> */}