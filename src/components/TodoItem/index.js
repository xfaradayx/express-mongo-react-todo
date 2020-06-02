import React from 'react';

const TodoItem = ({todo}) => {
    return (
        <li key={todo._id}>
            {todo.title}
        </li>
    );
}

export default TodoItem;