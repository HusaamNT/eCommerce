const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll;
  res.status(200).json(categoryData)
  } catch (err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
 try{
  const categoryData = await Category.findByPk(req.params.id);
  if (!categoryData){
    res.status(404).json({ message: 'Category not found'});
  }
  res.status(200).json(categoryData)
 }catch(err){
  res.status(500).json(err)
 }
});

router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create;
    res.status(200).json(newCategory);
  }catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    res.status(200).json(categoryData);
   }catch(err){
    res.status(500).json(err);
   }
});

module.exports = router;
