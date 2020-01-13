'use strict';
module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define('tasks', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "users"
      }
    }
  }, {});
  tasks.associate = function(models) {
    // associations can be defined here
    tasks.belongsTo(models.users, {
      as: "tasks",
      foreignKey: "user_id"
    });
  };
  return tasks;
};