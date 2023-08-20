// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "categoryId",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "categoryId",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // an alias for when data is retrieved
  as: "productTags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // an alias for when data is retrieved
  as: "taggedProducts",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
