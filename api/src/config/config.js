const { join } = require("path");

module.exports = {
  "development": {
    "dialect": "sqlite",
    "storage": join(__dirname, "../db/project_development.sqlite")
  },
  "test": {
    "dialect": "sqlite",
    "storage": join(__dirname, "../db/project_test.sqlite")
  },
  "production": {
    "dialect": "sqlite",
    "storage": join(__dirname, "../db/project_production.sqlite")
  }
}
