'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    taskCount: DataTypes.INTEGER
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.tasks, {
      as: "tasks",
      foreignKey: "user_id"
    });
  };
  return users;
};