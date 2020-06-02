import React from 'react';
import TodoItem from '../TodoItem/index';

const TodoList = ({list}) => {
    return (
        <ul>
            {list.map(todo => {
                return (
                    <TodoItem key={todo._id} todo={todo} />
                )
            })}
        </ul>
    );
}

export default TodoList;