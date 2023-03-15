const express = require('express');

const todoController = require('../controller/todos.controller');
const router = express.Router();

//   /todos path already in the app.js
router.get('/', todoController.getAllTodos);

router.post('/', todoController.addTodo);

// :id will be the dynamic path parameter for specific todo
router.patch('/:id', todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;