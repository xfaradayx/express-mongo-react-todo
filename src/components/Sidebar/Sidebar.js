import React, { useContext } from 'react'
import DataContext from '../../context/data/DataContext'
import SidebarContext from '../../context/sidebar/sidebarContext'
import SidebarList from './SidebarList/SidebarList'
import Drawer from '@material-ui/core/Drawer'
import sidebarConfig from './SidebarListConfig'
import Divider from '@material-ui/core/Divider'

const Sidebar = () => {
    const { open, closeSidebar } = useContext(SidebarContext);
    let { lists } = useContext(DataContext);    
    
    const config = sidebarConfig;
    return (
        <Drawer anchor="left" open={open} onClose={closeSidebar}>
            <SidebarList list={config} onClose={closeSidebar} />
            <Divider />
            <SidebarList list={lists} />
        </Drawer>
    )
}

export default Sidebar;