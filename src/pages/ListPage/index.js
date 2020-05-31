import React, { useContext } from 'react';
import DataContext from '../../context/data/DataContext';
import withHeaderTitle from '../../HOC/withHeaderTitle';
import { Typography } from '@material-ui/core';

const TodoList = ({match})  => {
    const {todos} = useContext(DataContext) 
    
    const filterListByPath = {
        "/tasks": todo => todo,
        "/important": todo => todo.important,
        "/done": todo => todo
    }
    const filterListById = id => list => list._id === id;

    const filteredTodos = match.params.listId ? 
        todos.filter(filterListById(match.params.listId)) :
        todos.filter(filterListByPath[match.path]);
    console.log('filtered', filteredTodos);
    
    return (
        <Typography variant="h3">
            <ul>
                {filteredTodos.map(todo => {
                    return (
                        <li key={todo._id}>
                            {todo.title}
                        </li>
                    )
                })}
            </ul>
        </Typography>
    );
}

export default withHeaderTitle(TodoList);
