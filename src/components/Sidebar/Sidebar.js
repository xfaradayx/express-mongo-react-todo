import React, { useContext } from 'react';
import DataContext from '../../context/data/DataContext';
import SidebarContext from '../../context/sidebar/sidebarContext';
import SidebarList from './SidebarList/index';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import sidebarConfig from './SidebarListConfig';

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