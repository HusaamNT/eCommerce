const sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

const categorySeeds = require('./categorySeeds');
const productSeeds = require('./productSeeds');
const productTagSeeds= require('./productTagSeeds');
const tagSeeds = require('./tagSeeds');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
const category = await Category.bulkCreate(categorySeeds,{
    individualHooks: true,
    returning: true,
})

const product = await Product.bulkCreate(productSeeds,{
    individualHooks: true,
    returning: true,
})
const productTagSeeds = await ProductTag.bulkCreate(productTagSeeds,{
    individualHooks: true,
    returning: true,
})
const tag = await Tag.bulkCreate(tagSeeds,{
    individualHooks: true,
    returning: true,
})
}

seedDatabase();