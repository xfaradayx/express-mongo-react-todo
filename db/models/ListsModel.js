const mongoose = require('../connection/mongo');

const schema = {
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    title: {type: 'String', required: true},
    todos: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Todos'} ] 
};

const collection = 'Lists';
const ListsSchema = mongoose.Schema(schema);
const Lists = mongoose.model(collection, ListsSchema);

module.exports = Lists;