import React from 'react'
import { useContext } from 'react'
import SidebarContext from '../../context/sidebar/sidebarContext'
import { Drawer,  } from '@material-ui/core'

const Sidebar = props => {
    const { open, closeSidebar } = useContext(SidebarContext);

    return (
        <Drawer anchor="left" open={open} onClose={closeSidebar}>
            Open
        </Drawer>
    )
}

export default Sidebar