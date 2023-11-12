const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 3);

    // Create user
    console.log(req.body);
    const newUser = await User.create({
      username : username,
      password : password,
    });

    // Respond with success message or JWT token
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ where: { username ,password} });

    console.log(user);
    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // // Check if password is correct
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }

    // Generate JWT token
    const token = jwt.sign({ userId: user.users_id, username: user.username }, 'secret', {
      expiresIn: '1h',
    });

        // set req.headers.authorization
        res.setHeader("authorization", `Bearer ${token}`);


    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  register,
  login,
};
