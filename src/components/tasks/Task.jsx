import React from 'react'
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as AiIcons from 'react-icons/ai'


import './task.css'

  
const Task = () => {
  
    return (
      <Card id='slow-transition' className=' gridTasks ' >
      
      
        <CardContent>
          <Typography className='cardTitle' gutterBottom variant="h5" component="h2">
            Tareas
          </Typography>
          <Typography className='bodyCard' variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
     
      <CardActions>
        <button className="cardBtn">
          <AiIcons.AiOutlineCheckSquare size={30} color="#00ac25"/>
        </button>
        <button className="cardBtn">
          <AiIcons.AiOutlineEdit size={30} color="#00a2ff"/>
        </button>
      </CardActions>
    </Card>
    )
}

export default Task
