const mongoose = require('mongoose');
const Todos = require('../../db/models/TodosModel')

module.exports = {
    add: async (req, res) => {
        const { title } = req.body
        const todo = await Todos.create({
            title: "Дать",
            done: false,
            important: false
        });

        return res.send(todo);
    },
    getTodos: async (req, res) => {
        const todos = await Todos.find();
        
        return res.send(todos);
    }
}
