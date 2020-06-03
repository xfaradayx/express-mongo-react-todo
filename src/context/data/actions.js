import * as api from './apiUtil';

// lists
export const getLists = async (dispatch) => {
    const lists = await api.getLists();

    dispatch({type: "GET_LISTS", payload: lists})
}

// todos
export const getTodos = async (dispatch) => {
    const todos = await api.getTodos();

    dispatch({type: "GET_TODOS", payload: todos})
}

export const addTodo = (title, listId) => async (dispatch) => {
    const todo = await api.addTodo(title, listId);
    
    dispatch({type: "CREATE_TODO", payload: todo});
}
