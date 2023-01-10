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
    through: 'product_tag',
})

Product.belongsToMany(Tag, {
    through: 'product_tag',

})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
  