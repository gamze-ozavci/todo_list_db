const express = require('express');
const router = express.Router();
const items = require('../controllers/items');

router.get('/', items.getTodoList);

router.get('/:id', items.getTodoById);

router.post('/', items.createNewTodo);

router.put('/:id', items.updateTodo);

router.delete('/:id', items.deleteTodo);

module.exports = router;