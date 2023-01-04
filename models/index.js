const Category = require('./Category');
const Product = require('./Product');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');

Category.hasMany(Product, {
    foreignKey: 'product_id'
})

Product.belongsTo(Category, {
    foreignKey: 'product_id'
})

Tag.hasMany(ProductTag, {
    foreignKey: 'product_id'
})

ProductTag.hasMany(Tag, {
    foreignKey: 'product_id'
})

