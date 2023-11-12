require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root1',
    password: process.env.DB_PASSWORD || 'Shinigami193',
    database: process.env.DB_NAME || 'todolist',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    // ...
  },
  production: {
    // ...
  }
};
