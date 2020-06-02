const mongoose = require('mongoose');
const Todos = require('../../db/models/TodosModel')

module.exports = {
    addTodo: async (req, res) => {
        const { title, listId, important } = req.body;
        const todo = await Todos.create({
            listId,
            title,
            important: important || false
        });

        return res.send(todo);
    },
    getTodos: async (req, res) => {
        const todos = await Todos.find();
        
        return res.send(todos);
    }
}
