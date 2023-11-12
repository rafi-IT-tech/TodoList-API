const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');
const { authMiddleware } = require("../middleware/auth");
// const passport = require('passport');

// Middleware for authentication
// const authMiddleware = passport.authenticate('jwt', { session: false });

router.post('/', authMiddleware, TodoController.createTodo);
router.get('/', authMiddleware, TodoController.getAllTodos);
// router.get('/:todolist_id', authMiddleware, TodoController.getTodoById);
// router.put('/:todolist_id', authMiddleware, TodoController.updateTodo);
// router.delete('/:todolist_id', authMiddleware, TodoController.deleteTodo);
// router.delete('/', authMiddleware, TodoController.deleteAllTodos);

module.exports = router;
