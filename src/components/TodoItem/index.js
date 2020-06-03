import React, { useState } from 'react';
import { useStyles } from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const TodoItem = ({todo}) => {
    const classes = useStyles();
    
    return (
        <ListItem key={todo._id} className={classes.root}>
            <ListItemText primary={todo.title} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>  
        </ListItem>
    );
}

export default TodoItem;