'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };

  Todo.createTodo = async (params) => {
    var newTodo = new Todo({
      title: params.title,
      description: params.description,
      status: params.status,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await newTodo.save(function(err, res) {
      if(err)
        self.render('show_message',
          {message: "Database error", type: "error"}
        );
      else
        self.render('show_message',
          {message: "New todo added", type: "success", todo: params}
        );
    });
  }

  return Todo;
};
