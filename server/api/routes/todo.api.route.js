const express = require ('express');
const router = express.Router();
const todoCtrl = require ('../controllers/todo.api.controller');

router.route('/')
            .get(todoCtrl.getTodos)
            .post(todoCtrl.addTodo)
            .put(todoCtrl.updateTodo);

router.route('/:id')
            .get(todoCtrl.getTodo)
            .post(todoCtrl.addTodo)
            .put(todoCtrl.deleteTodo);

module.exports = router;

