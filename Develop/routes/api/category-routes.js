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
 


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
