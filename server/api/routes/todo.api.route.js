import express from 'express';
import * as todoCtrl from '../controllers/todo.api.controller';

const router = express.Router();

router.route('/')
            .get(todoCtrl.getTodos)
            .post(todoCtrl.addTodo)

router.route('/:todoId')
            .get(todoCtrl.getTodo)
            .patch(todoCtrl.updateTodo)
            .delete(todoCtrl.deleteTodo)

export default router;
