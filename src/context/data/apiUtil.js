export const getLists = async () => {
    const res = await fetch('/api/getLists');
    const lists = await res.json();

    return lists;
}

export const getTodos = async () => {
    const res = await fetch('/api/getTodos');
    const todos = await res.json();

    return todos;
}

export const addTodo = async (title, listId) => {
    const res = await fetch('/api/addTodo', {
        method: "POST",
        body: JSON.stringify({title, listId}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const todo = await res.json();
    
    return todo;
}