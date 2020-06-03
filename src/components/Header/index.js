import React, { useContext, } from 'react'
import HeaderContext from '../../context/header/headerContext'
import SidebarContext from '../../context/sidebar/sidebarContext'
import { useStyles } from './styles';
import { AppBar, Typography, IconButton, Button, Toolbar, Container } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const Header = () => {
    const { openSidebar } = useContext(SidebarContext)
    const { title } = useContext(HeaderContext)
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar} >
                <IconButton 
                  edge="start" 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="menu" 
                  onClick={openSidebar}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
                <Button color="inherit">
                  Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header