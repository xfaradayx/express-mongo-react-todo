import React from 'react'
import { useContext } from 'react'
import SidebarContext from '../../context/sidebar/sidebarContext'
import SidebarList from './SidebarList/SidebarList'
import Drawer from '@material-ui/core/Drawer'

const Sidebar = props => {
    const { open, closeSidebar } = useContext(SidebarContext);

    return (
        <Drawer anchor="left" open={open} onClose={closeSidebar}>
            <SidebarList />
        </Drawer>
    )
}

export default Sidebar