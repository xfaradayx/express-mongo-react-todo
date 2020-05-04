// const Todos = require('../../db/models/TodosModel');
// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//     // const todo = new Todos({
//     //     title: "Починить приложение",
//     //     done: false,
//     //     important: false
//     // });
//     // todo.save((err, data) => {
//     //     if (err) console.log(err);
//     //     res.send(data);
//     // })
//     res.send({ok: 1})

// })

// router.post('/', (req, res) => {

// });

// module.exports = router;


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
