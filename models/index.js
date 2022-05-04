// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category);

Category.hasMany(Product);

Product.belongsToMany(Tag, { through: ProductTag }); // Don't forget the joining model!

Tag.belongsToMany(Product, { through: ProductTag }); // Ditto

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
