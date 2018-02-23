import express from 'express';
import * as todoCtrl from '../controllers/todo.api.controller';

const router = express.Router();

router.route('/')
            .get(todoCtrl.getTodos)
            .post(todoCtrl.addTodo)
            .put(todoCtrl.updateTodo);

router.route('/:id')
            .get(todoCtrl.getTodo)
            .post(todoCtrl.addTodo)
            .put(todoCtrl.deleteTodo);

export default router;
