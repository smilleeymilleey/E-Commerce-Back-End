const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', async (req, res) => {
  try{
    const getTags = await ProductTag.findAll()
      console.log("its working")
      res.status(200).json(getTags)
  } catch (error) {
    res.status(404).json(error)
  }
 
});

router.get('/:id', async (req, res) => {

  try {
    const singleId = await ProductTag.findAll({ where: {
      tag_id: req.params.id
    }})
    console.log("its working")
    res.status(200).json(singleId)
  } catch (error) {
    res.status(404).json(error)
  }

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
