// imports Model and DataTypes  of sequelize library
const { Model, DataTypes } = require("sequelize");
// imports  database connection from connection.js
const sequelize = require("../config/connection.js");

// Initializes Category model (table) by extending off Sequelize's Model class
class Category extends Model {}
// fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
