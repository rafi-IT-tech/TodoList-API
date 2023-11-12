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


const getTodoById = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      return res.status(200).json({ todo });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, userId } = req.body;
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      await todo.update({ title, description, userId });
      return res.status(200).json({ todo });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByPk(id);
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
      await todo.destroy();
      return res.status(204).send(); // No content on successful deletion
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const deleteAllTodos = async (req, res) => {
    try {
      await Todo.destroy({ where: {} });
      return res.status(204).send(); // No content on successful deletion
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = {
    createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
};
