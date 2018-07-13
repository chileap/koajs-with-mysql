require('dotenv').config();
var database = {
  development: {
    username: process.env.DATABASE_USERNAME_DEV,
    password: process.env.DATABASE_PASSWORD_DEV,
    database: process.env.DATABASE_NAME_DEV,
    host: process.env.DATABASE_HOST_DEV,
    dialect: "mysql"
  },
  test: {
    username: process.env.DATABASE_USERNAME_TEST,
    password: process.env.DATABASE_PASSWORD_TEST,
    database: process.env.DATABASE_NAME_TEST,
    host: process.env.DATABASE_HOST_TEST,
    dialect: "mysql"
  },
  production: {
    username: process.env.DATABASE_USERNAME_PRO,
    password: process.env.DATABASE_PASSWORD_PRO,
    database: process.env.DATABASE_NAME_PRO,
    host: process.env.DATABASE_HOST_PRO,
    dialect: "mysql"
  }
}

module.exports = database;
