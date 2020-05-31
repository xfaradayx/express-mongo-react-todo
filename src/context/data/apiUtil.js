export const getLists = async () => {
    const res = await fetch('/api/getLists');
    const data = await res.json();

    return data;
}

export const getTodos = async () => {
    const res = await fetch('/api/getTodos');
    const data = await res.json();

    return data;
}