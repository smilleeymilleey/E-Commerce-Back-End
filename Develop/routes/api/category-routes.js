const router = require('express').Router();

const { Category, Product } = require('../../models');



router.get('/', async (req, res) => {
  try {
    const siteCategories = await Category.findAll()
    console.log("from api/")
     res.status(200).json(siteCategories)
  }catch (error) {
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
}catch (error) {
  res.status(404).json(error)
}
 
});

router.post('/', async (req, res) => {
  // create a new category
  let newCategory = await Category.create({
    category_name: req.body.category_name
  })
  res.status(200).json(newCategory)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
