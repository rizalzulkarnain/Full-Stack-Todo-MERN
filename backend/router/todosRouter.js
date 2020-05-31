const express = require('express');

const todoRouter = require('../controller/todo');
const router = express.Router();

router.get('/', todoRouter.getHome);

router.get('/todo', todoRouter.getTodo);

router.post('/add', todoRouter.createTodo);

router.patch('/update/:id', todoRouter.updateTodo);

router.delete('/delete/:id', todoRouter.deleteTodo);

module.exports = router;
