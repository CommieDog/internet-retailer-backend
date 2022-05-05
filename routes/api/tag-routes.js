const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
router.get('/', async (req, res) => {
  // be sure to include its associated Product data
  const tags = await Tag.findAll(
    {
      include:
      [
        {
          model: Product,
        },
      ],
    },
  );
  res.json(tags);
});

  // find a single tag by its `id`
router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id,
  {
    include:
    [
      {
        model: Product,
      },
    ],
  },
);
res.json(tag);
});

  // create a new tag
router.post('/', async (req, res) => {
});

  // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
});

  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
});

module.exports = router;
