import React from 'react';
import { v4 as uuid } from 'uuid';
import ListItemLink from '../ListItemLink/ListItemLink';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DefaultIcon from '@material-ui/icons/List';

const SidebarList = ({list, onClose}) => {
    return (
        <List>
            {list.map(item => {
                return (
                    <ListItemLink key={uuid()} href={item.href || item._id} onClick={onClose}>
                        <ListItemIcon>
                            {item.icon || <DefaultIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItemLink>
                )
            })}
            {/* <Divider /> */}
        </List>
    )
}

export default SidebarList;