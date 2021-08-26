import React from 'react'

import * as FaIcons from 'react-icons/fa'

import {Link} from 'react-router-dom'
import MenuProfile from './MenuProfile'
import ('./nav.css')
const Nav = () => {
    return (
        <div className="nav">
            <div className="title">
                <h1>Tareas</h1>
            </div>
            <div className="links">
             
               
                <Link  to='/' className="link">
                    <FaIcons.FaTasks size={25} className='icon' color="#202020"/>
                    <span className="span">TAREAS</span>
                </Link>
                
                <MenuProfile/>
            </div>
        </div>
    )
}

export default Nav
