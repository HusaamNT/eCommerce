const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

Category.hasMany(Product, {
    foreignKey: 'category_id'
})

Product.belongsTo(Category, {
    foreignKey: 'category_id'
})

Tag.belongsToMany(Product, {
    foreignKey: 'tag_id',
    through:'ProductTag'
})

Product.belongsToMany(Tag, {
    foreignKey: 'product_tag',
    through:'ProductTag'
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
  