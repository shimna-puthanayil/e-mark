// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
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
  as: "product_tags",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // an alias for when data is retrieved
  as: "tagged_products",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
