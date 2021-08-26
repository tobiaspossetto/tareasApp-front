import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

import { Link } from 'react-router-dom';
import * as VscIcons from 'react-icons/vsc'
import './nav.css'
import {useUser} from '../../context/UserContext'
export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {isLogged} = useUser();
    return (
        <div>
            
            <Button className='link' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <VscIcons.VscAccount size={25} className='icon' color="#202020"/>
                    <span className="span">Cuenta</span>
            </Button>
            <Menu
                className='menuProfile'
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    isLogged ? <>
                        
                        <btn className="linkMenuProfile" onClick={handleClose} >Salir</btn>
                    </> : <><Link className="linkMenuProfile" to='/sign-up' onClick={handleClose}>Crear Cuenta</Link>
                    <Link className="linkMenuProfile" to='/sign-in' onClick={handleClose}>Ingresar</Link>
                    </>
                }

                
            </Menu>
        </div>
    );
}