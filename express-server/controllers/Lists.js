const mongoose = require('mongoose');
const Lists = require('../../db/models/ListsModel')

module.exports = {
    add: async (req, res) => {
        const { name } = req.body
        const todo = await Todos.create({
            name
        });

        return res.send(todo);
    },
    
    getLists: async (req, res) => {
        const lists = await Lists.find();

        return res.send(lists);
    }
}
