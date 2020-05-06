import React, { useContext, } from 'react'
import HeaderContext from '../../context/header/headerContext'
import SidebarContext from '../../context/sidebar/sidebarContext'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Typography, IconButton, Button, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }))

const Header = props => {
    const classes = useStyles()
    const { openSidebar } = useContext(SidebarContext)
    const { title } = useContext(HeaderContext)

    return (
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openSidebar}>
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    )
}

export default Header