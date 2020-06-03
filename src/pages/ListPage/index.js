import React, { useContext, useMemo } from 'react';
import DataContext from '../../context/data/DataContext';
import withHeaderTitle from '../../HOC/withHeaderTitle';
import TodoInput from '../../components/TodoInput/index';
import TodoList from '../../components/TodoList/index';

const ListPage = ({match})  => {
    const {todos, addTodo} = useContext(DataContext);
    
    const filterTodoByPath = {
        "/tasks": todos.filter(todo => todo),
        "/important": todos.filter(todo => todo.important)
    };
    const filterTodoById = id => todos.filter(todo => todo.listId === id);
    
    const filteredTodos = useMemo(
        () =>  match.params.listId ? 
            filterTodoById(match.params.listId) :
            filterTodoByPath[match.path],
        [match, todos]
    );

    const submitHandler = title => {
        addTodo(title, match.params.listId);        
    };
    
    const updateHandler = todoId => {
        
    };

    const deleteHandler = todoId => {

    };
    
    return (
        <>
            <TodoList todoList={filteredTodos} />
            <TodoInput onSubmit={submitHandler}/>
        </>
    );
}

export default withHeaderTitle(ListPage);
