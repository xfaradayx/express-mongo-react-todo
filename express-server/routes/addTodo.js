var express = require('express');
var router = express.Router();
const Todos = require('../../db/models/TodosModel');


router.get('/', function(req, res, next) {
    Todos.create({
        title: 'Помыть посуду',
        done: false,
        important: false
    }, (err, todo) => {
        res.send(todo);
    });
});

module.exports = router;
