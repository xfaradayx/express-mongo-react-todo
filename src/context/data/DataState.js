import React, { useReducer } from 'react';
import DataContext from './DataContext';
import dataReducer from './dataReducer';
import { apiGetLists } from './apiUtil';
import * as actions from './actions';
import initialState from './state';

const DataState = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    window.state = {...state};
    return (
        <DataContext.Provider value={{
            lists: state.lists, 
            todos: state.todos,
            getLists: () => actions.getLists(dispatch), 
            getTodos: () => actions.getTodos(dispatch),
            addTodo: (title, listId) => actions.addTodo(title, listId)(dispatch)
        }}>
            {children}
        </DataContext.Provider>
    ) 
}

export default DataState;