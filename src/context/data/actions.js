import * as api from './apiUtil';

export const getLists = async (dispatch) => {
    const lists = await api.getLists();

    dispatch({type: "GET_LISTS", payload: lists})
}

export const getTodos = async (dispatch) => {
    const todos = await api.getTodos();

    dispatch({type: "GET_TODOS", payload: todos})
}
