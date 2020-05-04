const mongoose = require('../connection/mongo');

const schema = {
    title: {type: 'String', required: true},
    done: {type: 'String', required: true},
    important: {type: 'String', required: true},
};

const collection = 'Todos';
const userSchema = mongoose.Schema(schema);
const Todos = mongoose.model(collection, userSchema);

module.exports = Todos;