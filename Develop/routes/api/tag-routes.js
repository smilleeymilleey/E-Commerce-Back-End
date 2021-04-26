const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');


router.get('/', async (req, res) => {
  try {
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
});

router.post('/', async (req, res) => {
  let newTag = await Tag.create({
    tag_name: req.body.tag_name
  })
  res.status(200).json(newTag)
});

router.put('/:id', async (req, res) => {
  let newTagName = await Tag.update(
    {tag_name: req.body.tag_name},
    { where: {id: req.params.id}}
  )
  res.status(200).json(newTagName)
});

router.delete('/:id', async (req, res) => {
  let deleteId = await Tag.destroy ({
      where: {
        id: req.params.id
      }
  })
  res.status(200).json(deleteId)
})

module.exports = router;
