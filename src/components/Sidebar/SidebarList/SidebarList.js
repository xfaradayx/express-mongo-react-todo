import React from 'react'
import ListItemLink from '../ListItemLink/ListItemLink'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import SidebarConf from '../SidebarList/SidebarListConfig'

const SidebarList = () => {
    const config = SidebarConf();
    return (
        <List>
            {config.map(item => {
                return (
                    <ListItemLink key={item.key} href={item.href} onClick={item.onClick}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItemLink>
                )
            })}
            <Divider />
        </List>
    )
}

export default SidebarList