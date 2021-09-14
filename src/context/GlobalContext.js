import {createContext, useState,useEffect, useReducer} from 'react';
import appReducer from './AppReducer';
import { useUser } from './UserContext'
import Cookies from 'universal-cookie'
import Axios from 'axios'
const initialState = {
    tasks: [
       

    ]
}

export const GlobalContext = createContext(initialState)


export const ContextProvider = ({children}) => {
    const [createError, setCreateError] = useState(false);
    const {isLogged,sesionTime} = useUser()
    const cookies = new Cookies();

    const [tasks, dispatchTask] = useReducer(appReducer, initialState)

    useEffect(() => {
        if(isLogged){
            getTasks()
        }
    }, [isLogged]);
    const getTasks = async () => {
        console.log('llamando')
        Axios({
            method: 'GET',
            url: 'http://localhost:4000/task/',
          
            headers: {'authorization':cookies.get('token')}
        })
        .then(response => {
           console.log(response.data)
           dispatchTask({type: 'GET', payload:response.data})
           
        })
        .catch(err => {console.log(err) })
        console.log(tasks)
    }

    const newTask = async (task) => {
        // sesionTime()
        setCreateError(false)
        Axios({
            method: 'POST',
            url: 'http://localhost:4000/task/',
            data: task,
            headers: {'authorization':cookies.get('token')}
        })
        .then(response => {
           console.log(response.data)
           dispatchTask({type: 'ADD', payload: response.data})
           getTasks()
        })
        .catch(err => { setCreateError(true) })
        
    }


    //funtion =>  dispatch({type:type, payload: valores})
  
    return(
        <GlobalContext.Provider value={{...tasks,createError, newTask}}>
            {children}
        </GlobalContext.Provider>
    )
}