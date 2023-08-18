// Enable access to .env variables
require("dotenv").config();

const Sequelize = require("sequelize");
//environment variables are used  to connect to database

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;
