import React from 'react';
import TodoItem from '../TodoItem/index';
import List from '@material-ui/core/List';

const TodoList = ({todoList}) => {
    
    return (
        <List>
            {todoList.map(todo => {
                return (
                    <TodoItem key={todo._id} todo={todo} />
                )
            })}
        </List>
    );
}

export default TodoList;