const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const siteCategories = await Category.findAll()
    console.log("from api/")
     res.status(200).json(siteCategories)
  } catch (error) {
    res.status(404).json(error);
  }
  });
 
router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id
    const categoryPK = await Product.findAll({
      where: {
        category_id: id
        }
      });
      console.log("from category/:id")
      res.status(200).json(categoryPK)
  } catch (error) {
    res.status(404).json(error)
  }
});

router.post('/', async (req, res) => {
  let newCategory = await Category.create({
    category_name: req.body.category_name
  })
  res.status(200).json(newCategory)
});

router.put('/:id', async (req, res) => {
  let newId = await Category.update({category_name: req.body.category_name}, {
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(newId)
});

router.delete('/:id', async (req, res) => {
  let deleteCategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(deleteCategory)
})
 
module.exports = router;
