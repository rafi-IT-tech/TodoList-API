const { Todo } = require('../models');

const createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const userId = req.user.userId; // Assuming you have middleware to extract user from JWT

    // console.log(user)
    const newTodo = await Todo.create({
      title : title,
      description : description,
      userId : userId,
      completed: completed
    });

    res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllTodos = async (req, res) => {
  try {
    console.log(req.user.userId);
    const userId = req.user.userId; // Assuming you have middleware to extract user from JWT

    const todos = await Todo.findAll({ where: { userId } });

    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Implement other CRUD operations as needed

module.exports = {
  createTodo,
  getAllTodos,
  // Implement other methods here
};
