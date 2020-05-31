const mongoose = require('../connection/mongo');

const schema = {
    listId: {type: mongoose.Schema.Types.ObjectId, ref: 'Lists'},
    title: {type: 'String', required: true},
    done: {type: 'String', required: true},
    important: {type: 'String', required: true},
};

const collection = 'Todos';
const TodosSchema = mongoose.Schema(schema);
const Todos = mongoose.model(collection, TodosSchema);

module.exports = Todos;