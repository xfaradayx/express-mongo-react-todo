import React from 'react'
import { useContext } from 'react'
import SidebarContext from '../../context/sidebar/sidebarContext'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ListItemLink from '../ListItemLink/ListItemLink'
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'


const Sidebar = props => {
    const { open, closeSidebar } = useContext(SidebarContext);

    return (
        <Drawer anchor="left" open={open} onClose={closeSidebar}>
            <List>
                <ListItemLink href="/tasks">
                    <ListItemIcon>
                        <FormatListBulletedOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Все задачи"/>
                </ListItemLink>
                <ListItemLink href="done">
                    <ListItemIcon>
                        <CheckCircleOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Завершенные"/>
                </ListItemLink>
                <ListItemLink href="important">
                    <ListItemIcon>
                        <NotificationImportantOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Важное"/>
                </ListItemLink>                
            </List>
        </Drawer>
    )
}

export default Sidebar