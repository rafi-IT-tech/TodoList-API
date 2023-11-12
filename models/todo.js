'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN,
    

  }, {
    sequelize,
    modelName: 'Todo',
    // timestamps: false,

  });


  
// Todo.init(
//   {
//     todolist_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     completed: DataTypes.BOOLEAN
//   },
//   {
//     sequelize,
//     modelName: 'Todo',
//     timestamps: false,
//   });

  return Todo;
};