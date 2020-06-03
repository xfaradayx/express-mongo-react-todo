
const dataReducer = (state, action) => {      
    switch (action.type) {
        // lists
        case "GET_LISTS": 
            return {
                ...state,
                lists: action.payload
            }
            
        // todos
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        case "CREATE_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default: 
            return state;
    }

}

export default dataReducer;