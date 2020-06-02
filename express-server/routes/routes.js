var express = require('express');
var router = express.Router();
const Todos = require('../controllers/Todos');
const Lists = require('../controllers/Lists');

// todos
router.post('/api/addTodo', Todos.addTodo);
router.get('/api/getTodos', Todos.getTodos);

// lists
router.get('/api/getLists', Lists.getLists);

module.exports = router;
